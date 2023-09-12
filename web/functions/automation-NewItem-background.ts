import { createClient } from '@supabase/supabase-js';
import { connect } from 'amqplib';
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
const { Logtail } = require("@logtail/node");

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_KEY!;
const RABBITMQ_URL = process.env.RABBITMQ_URL!;
const LOGTAIL_SOURCE_TOKEN = process.env.LOGTAIL_SOURCE_TOKEN!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const logtail = new Logtail(LOGTAIL_SOURCE_TOKEN);

/*/
    Queries can be adjusted to allow for other logic, i.e. a specific contract.
    In this example, the query will sort all NewItems since a certain block number.
    After which the message gets prepared and sent to MQ.
/*/
const NETWORK = "gnosischain"
const EVENT = "NewItem"
const DAPP = "curate"


const contracts = {
    '0x66260C69d03837016d88c9877e61e08Ef74C59F2': 'Address Tags Registry',
    '0x957A53A994860BE4750810131d9c876b2f52d6E1': 'Contract Domain Name Registry',
    '0x70533554fe5c17CAf77fE530f77eAB933B92af60': 'Tokens Registry',
    'default': 'Curate',
};



const entry: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const { data: lastSeenBlockData, error: lastSeenBlockError } = await supabase
      .from('logbook')
      .select('lastSeenBlock')
      .eq('dapp', DAPP)
      .eq('process', EVENT)
      .eq('network', NETWORK)
      .single();



    let lastSeenBlock = lastSeenBlockData?.lastSeenBlock
    if (lastSeenBlockError) {
        throw new Error(`Error fetching lastSeenBlock: ${lastSeenBlockError.message}`);
    }

    const today = new Date();
    const yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);


    const { data: historicalData, error: historicalError } = await supabase
      .from('historical')
      .select('*')
      .eq('chain_name', NETWORK)
      .eq('project', DAPP)
      .eq('event', EVENT)
      .gte('block', lastSeenBlock)
      .gte('timestamp', yesterday.toISOString()); // ignore very old messages.

    if (historicalError) {
        throw new Error(`Error fetching historical data: ${historicalError.message}`);
    }

    if (!historicalData || historicalData.length === 0) {
        logtail.info('No new items found');
        logtail.flush()
        return { statusCode: 200 };
    }
    logtail.info(historicalData)
    await sendToRabbitMQ(historicalData);

    const newLastSeenBlock = historicalData.length > 0 ? Math.max(...historicalData.map((item) => item.block)) : lastSeenBlock; // Safety guard, should not trigger anyway due to L76.

    const { error: updateError } = await supabase
      .from('logbook')
      .upsert(
        {
          dapp: DAPP,
          process: EVENT,
          network: NETWORK,
          lastSeenBlock: newLastSeenBlock + 1,
        },
        { returning: 'minimal' }
      );

    if (updateError) {
      throw new Error(`Error updating lastSeenBlock: ${updateError.message}`);
    }
    return { statusCode: 200 };
  } catch (error) {
    logtail.error('Error processing new items', { error: error.message });
    return { statusCode: 500, body: error.message };
  }
};

async function sendToRabbitMQ(newItems: any[]) {
  const connection = await connect(RABBITMQ_URL);
  const channel = await connection.createChannel();
  const discordQueue = 'staging.discord';
  const telegramQueue = 'telegram';


  for (const item of newItems) {
    const contractName = contracts[item.contract] || contracts['default'];
    const broadcast = `A new item has been added to ${contractName}: \n https://curate.kleros.io/100/${item.contract} \n Think this submission is not aligned with the policy? Challenge it & earn ETH. ✍📝`;

    const message = JSON.stringify({...item, message: broadcast, ...item.message });
    channel.sendToQueue(discordQueue, Buffer.from(message), {
      persistent: true,
    });
    // channel.sendToQueue(telegramQueue, Buffer.from(message), {
    //   persistent: true,
    // });
  }

  const stats = {
    events: newItems.length,
  };

  channel.publish('mission.control.room', 'curate', Buffer.from(JSON.stringify(stats)));

  logtail.info(`Sent messages to RabbitMQ: ${JSON.stringify(stats)}` )
  logtail.flush()
  await channel.close();
  await connection.close();
}

const handler = schedule("@hourly", entry)

export { handler };


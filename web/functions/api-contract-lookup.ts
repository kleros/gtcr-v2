import { Handler } from '@netlify/functions';


const handler: Handler = async (event, context) => {
    const { contract, chain } = event.queryStringParameters;
    if (!contract || !chain) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'contract and eip155 parameters are required' }),
      };
    }
    const targetAddress = `eip155:${chain}:${contract}`;
    const variables = {
      targetAddress,
    };

    const curatedInfo = await fetchGraphQLData(variables);

    if (!curatedInfo) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'contract not found' }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(curatedInfo),
    };
  };

async function fetchGraphQLData(variables: { targetAddress: string }): Promise<CuratedInfo | null> {
  const query = `
  query($targetAddress: String!) {
    addressTags: litems(where:{
      registry:"0x66260c69d03837016d88c9877e61e08ef74c59f2",
      key0_starts_with_nocase: $targetAddress,
      key0_ends_with_nocase: $targetAddress,
      status_in:[Registered, ClearingRequested]
    }, first: 1) {
      key0
      key1
      key2
      key3
    }
    contractDomains: litems(where:{
      registry:"0x957a53a994860be4750810131d9c876b2f52d6e1",
      key0_starts_with_nocase: $targetAddress,
      key0_ends_with_nocase: $targetAddress,
      status_in:[Registered, ClearingRequested]
    }, first: 1) {
      key0
      key1
    }
    tokens: litems(where:{
      registry:"0x70533554fe5c17caf77fe530f77eab933b92af60",
      key0_starts_with_nocase: $targetAddress,
      key0_ends_with_nocase: $targetAddress,
      status_in:[Registered, ClearingRequested]
    }, first: 1) {
      key0
      key1
      key2
    }
  }
  `;

  let result: any;

  try {
    const response = await fetch(
      'https://api.thegraph.com/subgraphs/name/kleros/legacy-curate-xdai',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      },
    );
    if (!response.ok) {
      return null;
    }
    result = await response.json();
    if (result.data === undefined) {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }

  // Add your logic to parse the result data and return the curatedInfo
  const parsedAddressTag: AddressTag | undefined = result.data.addressTags[0]
    ? {
        caipAddress: mdEscape(result.data.addressTags[0].key0),
        publicName: mdEscape(result.data.addressTags[0].key1),
        projectName: mdEscape(result.data.addressTags[0].key2),
        infoLink: mdEscape(result.data.addressTags[0].key3),
      }
    : undefined;

  const parsedContractDomain: ContractDomain | undefined = result.data
    .contractDomains[0]
    ? {
        caipAddress: mdEscape(result.data.contractDomains[0].key0),
        domain: mdEscape(result.data.contractDomains[0].key1),
      }
    : undefined;

  const parsedToken: Token | undefined = result.data.tokens[0]
    ? {
        caipAddress: mdEscape(result.data.tokens[0].key0),
        name: mdEscape(result.data.tokens[0].key1),
        symbol: mdEscape(result.data.tokens[0].key2),
      }
    : undefined;

  const curatedInfo: CuratedInfo = {
    addressTag: parsedAddressTag,
    contractDomain: parsedContractDomain,
    token: parsedToken,
  };

  return curatedInfo;
}

function mdEscape(input: string): string {
  return input.replace(/\*/g, '\\*').replace(/_/g, '\\_');
}

interface CuratedInfo {
  addressTag?: AddressTag;
  contractDomain?: ContractDomain;
  token?: Token;
}

interface AddressTag {
  caipAddress: string;
  publicName: string;
  projectName: string;
  infoLink: string;
}

interface ContractDomain {
  caipAddress: string;
  domain: string;
}

interface Token {
  caipAddress: string;
  name: string;
  symbol: string;
}

export { handler };


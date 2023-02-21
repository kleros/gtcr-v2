import { initializeConnector } from "@web3-react/core";
import { Network } from "@web3-react/network";

import { RPC_PROVIDERS } from "consts/providers";
import { Connection, ConnectionType } from "./IConnection";

const [network, hooks] = initializeConnector<Network>(
  (actions) =>
    new Network({ actions, urlMap: RPC_PROVIDERS, defaultChainId: 5 })
);

export const networkConnection: Connection = {
  connector: network,
  hooks: hooks,
  type: ConnectionType.NETWORK,
  priority: -1,
};

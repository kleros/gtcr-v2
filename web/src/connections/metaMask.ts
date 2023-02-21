import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { Connection, ConnectionType } from "./IConnection";

const onError = (error: Error) => {
  console.debug(`web3-react error: ${error}`);
};

const [metaMask, hooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions, onError })
);

export const injectedConnection: Connection = {
  connector: metaMask,
  hooks: hooks,
  type: ConnectionType.INJECTED,
  priority: 1,
};

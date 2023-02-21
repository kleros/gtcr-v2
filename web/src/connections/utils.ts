import { Connector } from "@web3-react/types";
import CONNECTIONS from ".";
import { Connection, ConnectionType } from "./IConnection";
import { injectedConnection } from "./metaMask";
import { networkConnection } from "./network";

export function getConnection(c: Connector | ConnectionType) {
  if (c instanceof Connector) {
    const connection = CONNECTIONS.find(
      (connection) => connection.connector === c
    );
    if (!connection) {
      throw Error("unsupported connector");
    }
    return connection;
  } else {
    switch (c) {
      case ConnectionType.INJECTED:
        return injectedConnection;
      case ConnectionType.NETWORK:
        return networkConnection;
    }
  }
}

export function getConnectionName(
  connectionType: ConnectionType,
  hasMetaMaskExtension: boolean = isMetaMaskWallet()
) {
  switch (connectionType) {
    case ConnectionType.INJECTED:
      return hasMetaMaskExtension ? "MetaMask" : "Browser Wallet";
    case ConnectionType.NETWORK:
      return "Network";
  }
}

export const getOrderedConnections = (): Connection[] =>
  [...CONNECTIONS].sort((a, b) => b.priority - a.priority);

export const isInjected = (): boolean => Boolean(window.ethereum);

export const isMetaMaskWallet = (): boolean =>
  window.ethereum?.isMetaMask ?? false;

export const isNetworkType = (connector: Connector): boolean =>
  getConnection(connector).type === networkConnection.type;

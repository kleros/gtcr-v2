import React, { useMemo } from "react";
import { Connector } from "@web3-react/types";
import { Web3ReactProvider, Web3ReactHooks } from "@web3-react/core";

import { getConnectionName, getOrderedConnections } from "../connections/utils";
import { Connection } from "../connections/IConnection";
import useEagerlyConnect from "../hooks/useEagerlyConnect";

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  useEagerlyConnect();
  const connections = getOrderedConnections();
  const connectors: [Connector, Web3ReactHooks][] = connections.map(
    ({ hooks, connector }) => [connector, hooks]
  );
  const key = useMemo(
    () =>
      connections
        .map(({ type }: Connection) => getConnectionName(type))
        .join("-"),
    [connections]
  );
  return (
    <Web3ReactProvider connectors={connectors} key={key}>
      {children}
    </Web3ReactProvider>
  );
};

export default Web3Provider;

import React, { useEffect } from "react";
import styled from "styled-components";
import { useWeb3React, Web3ReactHooks } from "@web3-react/core";

import { Button } from "@kleros/ui-components-library";
import { injectedConnection, networkConnection } from "../connections";
import { getConnection, isNetworkType } from "../connections/utils";
import { getChainNameById } from "consts/supportedChains";

const ConnectButton: React.FC = () => {
  const { isActive, connector } = useWeb3React();

  return isActive && !isNetworkType(connector) ? (
    <NetworkDisplay />
  ) : (
    <Button
      small
      text={"Connect"}
      onClick={() => injectedConnection.connector.activate()}
    />
  );
};

export default ConnectButton;

const NetworkDisplay = () => {
  const { chainId, isActivating, isActive, connector } = useWeb3React();
  const connectionType = getConnection(connector).type;

  useEffect(() => {
    if (chainId && connectionType !== networkConnection.type) {
      networkConnection.connector.activate(chainId);
    }
  }, [chainId, connectionType, connector]);

  return (
    <div>
      <NetworkStatus {...{ chainId, isActivating, isActive }} />
    </div>
  );
};

interface INetworkStatus {
  isActivating: ReturnType<Web3ReactHooks["useIsActivating"]>;
  isActive: ReturnType<Web3ReactHooks["useIsActive"]>;
  chainId: ReturnType<Web3ReactHooks["useChainId"]>;
  error?: Error;
}

const NetworkStatus = ({
  isActivating,
  isActive,
  chainId,
  error,
}: INetworkStatus) => {
  const chainName = getChainNameById(chainId);
  return (
    <Container>
      {error ? (
        <div className="network-badge">
          <Dot color="error" />
          {error.name ?? "Error"}
        </div>
      ) : isActivating ? (
        <div className="network-badge">
          <Dot color="warning" />
          {chainName}
        </div>
      ) : (
        isActive && (
          <div className="network-badge">
            <Dot color="success" />
            {chainName}
          </div>
        )
      )}
    </Container>
  );
};

const Dot = styled.div<{ color: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.color]};
`;

const Container = styled.div`
  color: white;

  .network-badge {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

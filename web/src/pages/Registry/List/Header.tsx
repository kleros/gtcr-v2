import React from "react";
import styled from "styled-components";

import Title from "components/Title";
import StatusBadge from "components/StatusBadge";
import EthereumIcon from "svgs/icons/ethereum.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <TitleArea>
        <Title large text="Address Tags" Icon={EthereumIcon} />
        <StatusBadge status="Registered" />
      </TitleArea>
      <StyledLabel>
        {" "}
        A list of public name tags, associated with Ethereum mainnet contract
        addresses.
      </StyledLabel>
    </Container>
  );
};
export default Header;

const Container = styled.div``;

const StyledLabel = styled.label`
  display: flex;
  gap: 8px;
  font-size: 16px;
  margin-top: 24px;
`;

const TitleArea = styled.div`
  display: flex;
  width: 100%;
`;

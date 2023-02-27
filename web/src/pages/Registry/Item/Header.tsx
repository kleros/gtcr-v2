import React from "react";
import styled from "styled-components";

import Title from "components/Title";
import StatusBadge from "components/StatusBadge";

import EtherscanIcon from "svgs/icons/etherscan.svg";
import GlobeIcon from "svgs/icons/globe.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <TitleArea>
        <Title large text="ENS: Public Resolver 2" />
        <StatusBadge status="Included" />
      </TitleArea>
      <LinkArea>
        <div className="link">
          <EtherscanIcon />
          0x4976...ba41
        </div>
        <div className="link">
          <GlobeIcon />
          ens.domain
        </div>
      </LinkArea>
      <StyledLabel>
        {" "}
        ENS related information updating smart contract
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
`;

const TitleArea = styled.div`
  display: flex;
  width: 100%;
`;

const LinkArea = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  .link {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.primaryBlue};
  }
`;

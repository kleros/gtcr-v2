import React from "react";
import styled from "styled-components";

import Title from "components/Title";
import StatusBadge from "components/StatusBadge";

const Header: React.FC = () => {
  return (
    <Container>
      <TitleArea>
        <Title large text="ENS: Public Resolver 2" />
        <StatusBadge status="Registered" />
      </TitleArea>
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
  margin-top: 24px;
`;

const TitleArea = styled.div`
  display: flex;
  width: 100%;
`;

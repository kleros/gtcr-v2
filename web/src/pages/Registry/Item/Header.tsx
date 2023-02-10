import React from "react";
import styled from "styled-components";
import Title from "~src/components/Title";

const Header: React.FC = () => {
  return (
    <Container>
      <Title text="ENS: Public Resolver 2" />
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

import React from "react";
import styled from "styled-components";

import PolicyIcon from "svgs/icons/policy.svg";

const Footer: React.FC = () => {
  return (
    <Container>
      <div>Make Sure you read and understand the Policies</div>
      <StyledA>
        <PolicyIcon />
        Curation Policy
        <PolicyIcon />
        List Policy
      </StyledA>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.mediumBlue};
  color: ${({ theme }) => theme.primaryBlue};
`;

const StyledA = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  > svg {
    width: 16px;
    height: 16px;
    margin-left: 20px;
    fill: ${({ theme }) => theme.primaryBlue};
  }
`;

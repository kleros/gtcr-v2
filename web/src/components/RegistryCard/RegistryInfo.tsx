import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IRegistryInfo {
  network: string;
  listNumber: number | string;
}
const RegistryInfo: React.FC<IRegistryInfo> = ({ network, listNumber }) => {
  return (
    <Container>
      <div className="wide">{network}</div>
      <div>{listNumber} Lists</div>
      <Link className="link" to={"/"}>
        See all
      </Link>
    </Container>
  );
};

export default RegistryInfo;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText};

  .wide {
    width: 70%;
    font-size: 16px;
    color: ${({ theme }) => theme.primaryText};
  }
  .link {
    color: ${({ theme }) => theme.primaryBlue};
  }
`;

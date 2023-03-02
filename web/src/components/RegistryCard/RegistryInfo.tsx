import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Title from "../Title";

interface IRegistryInfo {
  network: string;
  listNumber: number | string;
  Icon?: React.FC<React.SVGAttributes<SVGElement>>;
}
const RegistryInfo: React.FC<IRegistryInfo> = ({
  network,
  Icon,
  listNumber,
}) => {
  return (
    <Container>
      <TitleContainer>
        <Title text={network} Icon={Icon} />
      </TitleContainer>
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

const TitleContainer = styled.div`
  width: 70%;
  margin-bottom: 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.primaryText};
`;

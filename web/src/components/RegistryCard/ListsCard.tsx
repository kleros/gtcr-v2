import React from "react";
import styled from "styled-components";
import { Card } from "@kleros/ui-components-library";

const ListsCard = () => {
  return (
    <StyledCard>
      <Row>
        <Column className="large">Registries of contract domain names</Column>
        <Column>12 items</Column>
        <Column className="status">Registed</Column>
        <Column className="cta">Open</Column>
      </Row>
      <Row>
        <Column className="large">Address Tags</Column>
        <Column>12 items</Column>
        <Column className="status">Registed</Column>
        <Column className="cta">Open</Column>
      </Row>
    </StyledCard>
  );
};
export default ListsCard;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 120px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.secondaryText};

  .large {
    flex-basis: 60%;
    text-align: start;
    margin-left: 24px;
    font-size: 16px;
    color: ${({ theme }) => theme.primaryText};
  }

  .status {
    color: ${({ theme }) => theme.success};
  }

  .cta {
    color: ${({ theme }) => theme.primaryBlue};
  }
`;

const Column = styled.div`
  text-align: center;
  flex-basis: 10%;
  font-size: 14px;
`;

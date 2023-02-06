import React from "react";
import styled from "styled-components";
import { Card } from "@kleros/ui-components-library";
import { Link } from "react-router-dom";
import StatusBadge from "../StatusBadge";
import Title from "../Title";
import PnkIcon from "svgs/icons/pnk.svg";

const ListsCard = () => {
  return (
    <StyledCard>
      <Row>
        <Column className="large">
          <Title text="Registries of contract domain names" Icon={PnkIcon} />
        </Column>
        <Column>12 items</Column>
        <Column className="status">
          <StatusBadge status="Registered" />
        </Column>
        <Column className="cta">
          <Link to="/registry/1">Open</Link>
        </Column>
      </Row>
      <Row>
        <Column className="large">
          <Title text="Address Tags" Icon={PnkIcon} />
        </Column>
        <Column>12 items</Column>
        <Column className="status">
          <StatusBadge status="Registered" />
        </Column>
        <Column className="cta">
          <Link to="/registry/1">Open</Link>
        </Column>
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

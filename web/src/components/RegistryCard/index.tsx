import React from "react";
import styled from "styled-components";
import { Card } from "@kleros/ui-components-library";
import RegistryInfo from "./RegistryInfo";
import ListsCard from "./ListsCard";

interface IRegistryCard {
  network: string;
}

const RegistryCard: React.FC<IRegistryCard> = ({ network }) => (
  <StyledCard>
    <RegistryInfo network={network} listNumber={14} />
    <ListsCard />
  </StyledCard>
);

export default RegistryCard;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 220px;
  padding: 24px;
`;

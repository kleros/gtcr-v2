import React from "react";
import styled from "styled-components";
import { Card } from "@kleros/ui-components-library";
import RegistryInfo from "./RegistryInfo";
import ListsDisplay from "../ListsDisplay";

interface IRegistryCard {
  network: string;
  registries: any[];
  Icon?: React.FC<React.SVGAttributes<SVGElement>>;
}

const RegistryCard: React.FC<IRegistryCard> = ({
  network,
  registries,
  Icon,
}) => {
  return (
    <StyledCard>
      <RegistryInfo network={network} Icon={Icon} listNumber={14} />
      <ListsDisplay data={registries} />
    </StyledCard>
  );
};

export default RegistryCard;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fit-content;

  padding: 24px;
`;

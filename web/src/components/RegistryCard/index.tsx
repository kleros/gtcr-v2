import React from "react";
import styled from "styled-components";
import { Card } from "@kleros/ui-components-library";
import RegistryInfo from "./RegistryInfo";
import ListsCard from "./ListsCard";
import PnkIcon from "svgs/icons/pnk.svg";
import ListsDisplay from "../ListsDisplay";

const data = [
  {
    Icon: PnkIcon,
    label: "Registries of contract domain names",
    itemsCount: 12,
    status: "Registered",
    link: "domain-names.xyz",
  },
  {
    Icon: PnkIcon,
    label: "Address Tags",
    itemsCount: 2,
    status: "Challenged",
  },
];

interface IRegistryCard {
  network: string;
  Icon?: React.FC<React.SVGAttributes<SVGElement>>;
}

const RegistryCard: React.FC<IRegistryCard> = ({ network, Icon }) => (
  <StyledCard>
    <RegistryInfo network={network} Icon={Icon} listNumber={14} />
    <ListsCard />
  </StyledCard>
);

export default RegistryCard;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fit-content;

  padding: 24px;
`;

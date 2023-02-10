import React from "react";
import styled from "styled-components";

import ListsDisplay, { IItemInfo } from "components/ListsDisplay";
import SearchAndFilters from "components/ListsDisplay/SearchAndFilters";
import ItemCard from "components/ItemCard";
import Header from "./Header";
import Footer from "./Footer";

import PnkIcon from "svgs/icons/pnk.svg";

const data: IItemInfo[] = [
  {
    Icon: PnkIcon,
    label: "Registries of contract domain names",
    itemsCount: 12,
    status: "Registered",
    url: "domain-names.xyz",
  },
  {
    Icon: PnkIcon,
    label: "Address Tags",
    itemsCount: 2,
    status: "Challenged",
  },
  {
    Icon: PnkIcon,
    label: "DeversiFi Storytelling - Standard Impact sdfsdfasfadf",
    itemsCount: 4,
    status: "Submitted",
    url: "domain-names.xyz",
  },
  {
    Icon: PnkIcon,
    label: "Insurance Data & Modelling",
    itemsCount: 8,
    status: "Submitted",
  },
];

const ListsByNetwork: React.FC = () => {
  return (
    <Container>
      <StyledItemCard {...{ Header, Footer }} />
      <SearchAndFilters listCount={data.length} />
      <ListsDisplay data={data} />
    </Container>
  );
};

export default ListsByNetwork;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StyledItemCard = styled(ItemCard)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 4rem;
`;

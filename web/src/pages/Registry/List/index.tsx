import React, { useState } from "react";
import styled from "styled-components";

import ListsDisplay, { IItemInfo } from "components/ListsDisplay";
import SearchAndFilters from "components/ListsDisplay/SearchAndFilters";
import ListHistory from "components/ListHistory";
import ItemCard from "components/ItemCard";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Tabs from "./Tabs";

const data: IItemInfo[] = [
  {
    label: "ENS: Public Resolver 2",
    status: "Registered",
    url: "domain-names.xyz",
  },
  {
    label: "IDEX: Exchange 1",
    status: "Challenged",
    url: "domain-names.xyz",
  },
  {
    label: "Polygon (Matic): PoS Bridge",
    status: "Submitted",
    url: "domain-names.xyz",
  },
  {
    label: "Aave: AAVE Token",
    status: "Submitted",
    url: "domain-names.xyz",
  },
  {
    label: "OpenSea: Wyvern Exchange v1",
    status: "Registered",
    url: "domain-names.xyz",
  },
];

const List: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <Container>
      <StyledItemCard {...{ Header, Content, Footer }} />
      <Tabs callback={setActiveTab} />
      <SearchAndFilters listCount={data.length} />
      {activeTab === 0 ? <ListsDisplay data={data} /> : <ListHistory />}
    </Container>
  );
};

export default List;

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

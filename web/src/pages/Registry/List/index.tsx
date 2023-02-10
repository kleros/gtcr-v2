import React, { useState } from "react";
import styled from "styled-components";

import { Tabs as TabsComponent } from "@kleros/ui-components-library";

import PaperScriptIcon from "svgs/icons/paper-script.svg";
import HistoryIcon from "svgs/icons/history.svg";

import ListsDisplay, { IItemInfo } from "components/ListsDisplay";
import SearchAndFilters from "components/ListsDisplay/SearchAndFilters";
import ItemCard from "components/ItemCard";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

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
  return (
    <Container>
      <StyledItemCard {...{ Header, Content, Footer }} />
      <Tabs />
      <SearchAndFilters listCount={data.length} />
      <ListsDisplay data={data} />
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

const TABS = [
  { text: "List", value: 0, Icon: PaperScriptIcon, path: "list" },
  { text: "History", value: 1, Icon: HistoryIcon, path: "history" },
];
const Tabs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <StyledTabs
      currentValue={currentTab}
      items={TABS}
      callback={(n: number) => {
        setCurrentTab(n);
      }}
    />
  );
};

const StyledTabs = styled(TabsComponent)`
  width: 100%;
  > * {
    display: flex;
    flex-wrap: wrap;
  }
`;

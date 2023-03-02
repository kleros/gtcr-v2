import React from "react";
import styled from "styled-components";

import ListsDisplay from "components/ListsDisplay";
import SearchAndFilters from "components/ListsDisplay/SearchAndFilters";

import { useCrossChainLRegistries } from "../../../hooks/queries/useCrossChainLRegistries";

const ListsByNetwork: React.FC = () => {
  const { data } = useCrossChainLRegistries(8, ["gnosis", "goerli"], {
    orderBy: "numberOfRegistered",
    orderDirection: "desc",
  });
  console.log({ data });
  return (
    <Container>
      <Title>Community Curated Lists</Title>
      <SearchAndFilters listCount={data?.crossChainLRegistries?.length} />
      <ListsDisplay data={data?.crossChainLRegistries} />
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

const Title = styled.h1`
  margin-bottom: 48px;
`;

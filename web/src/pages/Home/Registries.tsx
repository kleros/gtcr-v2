import React from "react";
import styled from "styled-components";
import { Searchbar } from "@kleros/ui-components-library";
import RegistryCard from "../../components/RegistryCard";

import EthIcon from "svgs/icons/ethereum.svg";
import GnosisIcon from "svgs/icons/gnosis.svg";
import { useCrossChainLRegistries } from "../../hooks/queries/useCrossChainLRegistries";
import { capitalize } from "../../utils/capitalize";

const NETWORKS = ["gnosis", "goerli"];

const Registries = () => {
  const { data } = useCrossChainLRegistries(3, NETWORKS, {
    orderBy: "numberOfRegistered",
    orderDirection: "desc",
    sortByChains: true,
  });
  return (
    <Container>
      <Searchbar className="search" />
      <div className="list">
        {data &&
          Object.entries(data).map(([network, registries]) => (
            <RegistryCard
              key={network}
              network={capitalize(network)}
              registries={registries}
              Icon={EthIcon}
            />
          ))}
      </div>
    </Container>
  );
};

export default Registries;

const Container = styled.div`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primaryText};

  .search {
    width: 100%;
    margin-bottom: 2rem;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    justify-content: space-between;
  }
`;

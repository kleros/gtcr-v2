import React from "react";
import styled from "styled-components";
import { Searchbar } from "@kleros/ui-components-library";
import RegistryCard from "components/RegistryCard";

import EthIcon from "svgs/icons/ethereum.svg";
import GnosisIcon from "svgs/icons/gnosis.svg";

const Registries = () => (
  <Container>
    <Searchbar className="search" />
    <div className="list">
      <RegistryCard network="Ethereum" Icon={EthIcon} />
      <RegistryCard network="Gnosis" Icon={GnosisIcon} />
      <RegistryCard network="Polygon" Icon={GnosisIcon} />
    </div>
  </Container>
);

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

import React from "react";
import styled from "styled-components";
import Stats from "./CourtOverview/Stats";
import Registries from "./Registries";
import { useAllTasks } from "../../hooks/queries/useAllTasks";

const getOneYearAgoTimestamp: () => number = () => {
  const currentTime = new Date().getTime() / 1000;
  return currentTime - 31556926; // One year in seconds
};

const Home: React.FC = () => {
  const { data } = useAllTasks(10, ["gnosis", "goerli"]);
  console.log({ data });

  return (
    <>
      <Banner>
        <BannerImage />
      </Banner>
      <Container>
        <Title>Community Curated Lists</Title>
        <Stats />
        <Registries />
      </Container>
    </>
  );
};

export default Home;

const Banner = styled.div`
  width: 100%;
  height: 20rem;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;
  padding: 32px;
`;

const BannerImage = styled.div`
  height: 20rem;
  width: 100%;
  margin-bottom: 3rem;
  background-color: ${({ theme }) => theme.primaryPurple};
`;

const Title = styled.h1`
  margin-bottom: 48px;
`;
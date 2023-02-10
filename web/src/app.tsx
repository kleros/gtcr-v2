import React from "react";
import StyledComponentsProvider from "context/StyledComponentsProvider";
import { SWRConfig } from "swr";
import { request } from "graphql-request";
import { Routes, Route } from "react-router-dom";

import Layout from "layout/index";
import Home from "./pages/Home";
import Registry from "./pages/Registry";
import styled from "styled-components";

const fetcherBuilder =
  (url: string) =>
  ({ query, variables }: { query: string; variables?: any }) => {
    console.log("fetch");
    return request(url, query, variables);
  };

const App: React.FC = () => {
  return (
    <StyledComponentsProvider>
      <SWRConfig
        value={{
          fetcher: fetcherBuilder(
            "https://api.thegraph.com/subgraphs/name/alcercu/kleros-core"
          ),
        }}
      >
        <Container>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="registry/*" element={<Registry />} />
              <Route
                path="*"
                element={<h1>Justice not found here ¯\_( ͡° ͜ʖ ͡°)_/¯</h1>}
              />
            </Route>
          </Routes>
        </Container>
      </SWRConfig>
    </StyledComponentsProvider>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.lightBackground};
`;

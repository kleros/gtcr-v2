import React from "react";
import styled from "styled-components";
import { SWRConfig } from "swr";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { Routes, Route } from "react-router-dom";

import Layout from "layout/index";
import Home from "./pages/Home";
import Registry from "./pages/Registry";

import { BreadcrumbProvider } from "./hooks/useBreadcrumbContext";
import StyledComponentsProvider from "context/StyledComponentsProvider";
import { execute } from "../.graphclient";

const fetcherBuilder = async ({
  query,
  variables,
}: {
  query: TypedDocumentNode<any, any>;
  variables: any;
}) => {
  console.log({ query });
  console.log({ variables });
  return await execute(query, variables);
};

const App: React.FC = () => {
  return (
    <StyledComponentsProvider>
      <SWRConfig
        value={{
          fetcher: fetcherBuilder,
        }}
      >
        <Container>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="registry/*"
                element={
                  <BreadcrumbProvider>
                    <Registry />
                  </BreadcrumbProvider>
                }
              />

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

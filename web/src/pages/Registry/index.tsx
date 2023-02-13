import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { Breadcrumb } from "@kleros/ui-components-library";
import ListsByNetwork from "./ListsByNetwork";
import List from "./List";
import Item from "./Item";
import { useBreadcrumbContext } from "hooks/useBreadcrumbContext";

const Regisrty: React.FC = () => {
  const { items, navigateBack } = useBreadcrumbContext();

  return (
    <Container>
      {items && (
        <StyledBreadcrumb items={items} clickable callback={navigateBack} />
      )}
      <Routes>
        <Route path="/:id" element={<ListsByNetwork />} />
        <Route path="/:id/:address" element={<List />} />
        <Route path="/:id/:address/:item" element={<Item />} />
      </Routes>
    </Container>
  );
};

export default Regisrty;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  height: auto;
  padding: 32px 0;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 48px 0 24px 0;
`;

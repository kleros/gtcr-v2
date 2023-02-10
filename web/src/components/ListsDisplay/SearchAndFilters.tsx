import React from "react";
import { Button } from "@kleros/ui-components-library";
import styled from "styled-components";

import Filters from "./Filters";
import Search from "./Search";

const SearchAndFilters: React.FC<{ listCount: number }> = ({ listCount }) => (
  <Container>
    <ContentArea>
      <Search />
      <Button text="Create New List" />
    </ContentArea>
    <ContentArea>
      <label>{listCount} Lists</label>
      <Filters />
    </ContentArea>
  </Container>
);

export default SearchAndFilters;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

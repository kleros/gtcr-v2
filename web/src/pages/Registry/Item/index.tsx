import React from "react";
import styled from "styled-components";

import ListHistory from "components/ListHistory";
import ItemCard from "components/ItemCard";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const Item: React.FC = () => {
  return (
    <Container>
      <StyledItemCard {...{ Header, Content, Footer }} />
      <ListHistory />
    </Container>
  );
};

export default Item;

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

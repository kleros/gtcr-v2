import React from "react";
import styled from "styled-components";
import { Card } from "@kleros/ui-components-library";

interface IItemCardProps {
  Header: React.FC;
  Content?: React.FC;
  Footer?: React.FC;
}
const ItemCard: React.FC<IItemCardProps> = ({ Header, Content, Footer }) => (
  <StyledCard>
    <Header />
    {Content ? (
      <ContentContainer>
        <Content />
      </ContentContainer>
    ) : (
      <Separator />
    )}
    {Footer && <Footer />}
  </StyledCard>
);

export default ItemCard;

const StyledCard = styled(Card)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 64px;
`;

const Separator = styled.div`
  width: 100%;
  height: 5rem;
`;

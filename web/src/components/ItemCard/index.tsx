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
    {Content && <Content />}
    {Footer && <Footer />}
  </StyledCard>
);

export default ItemCard;

const StyledCard = styled(Card)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-top: 2px solid ${({ theme }) => theme.secondaryPurple};
`;

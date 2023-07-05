import React from "react";
import styled from "styled-components";

import { Card } from "@kleros/ui-components-library";
import ListRow from "./ListRow";
import { ItemStatus } from "../StatusBadge";

export interface IItemInfo {
  label: string;
  status: ItemStatus;
  itemsCount?: number | string;
  url?: string;
  Icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
interface ListDisplayProps {
  data: IItemInfo[];
}

const ListsDisplay: React.FC<ListDisplayProps> = ({ data }) => {
  return (
    <StyledCard>
      {data &&
        data.map(({ Icon, label, url, itemsCount, status }, index) => (
          <ListRow key={index} {...{ Icon, label, url, itemsCount, status }} />
        ))}
    </StyledCard>
  );
};

export default ListsDisplay;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  font-size: 14px;
`;

import React from "react";
import styled from "styled-components";
import LightButton from "components/LightButton";
import StatusBadge from "components/StatusBadge";
import Title from "components/Title";

interface IListRow {
  label: string;
  itemsCount: number | string;
  status: string;
  Icon?: React.FC<React.SVGAttributes<SVGElement>>;
  link?: string;
}

const ListRow: React.FC<IListRow> = ({
  Icon,
  label,
  link,
  itemsCount,
  status,
}) => {
  return (
    <StyledRow>
      <LeftSide>
        <Title {...{ Icon, text: label, link }} />
      </LeftSide>
      <RightSide>
        <label>{itemsCount} Items</label>
        <StatusBadge status={status} />
        <LightButton text="Open" />
      </RightSide>
    </StyledRow>
  );
};

export default ListRow;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.stroke};
  padding: 12px 24px;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  font-size: 14px;
  label {
    width: 60px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

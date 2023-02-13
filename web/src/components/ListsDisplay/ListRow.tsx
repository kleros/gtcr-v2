import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import LightButton from "components/LightButton";
import StatusBadge from "components/StatusBadge";
import Title from "components/Title";
import { IItemInfo } from "components/ListsDisplay";
import { useBreadcrumbContext } from "hooks/useBreadcrumbContext";

const ListRow: React.FC<IItemInfo> = ({
  Icon,
  label,
  url,
  itemsCount,
  status,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { addItem } = useBreadcrumbContext();

  const handleClick = () => {
    addItem(label);
    navigate(`${pathname}/2`);
  };
  return (
    <StyledRow>
      <LeftSide>
        <Title {...{ Icon, text: label, link: url }} />
      </LeftSide>
      <RightSide>
        {itemsCount && <label>{itemsCount} Items</label>}
        <StatusBadge status={status} />
        <LightButton text="Open" onClick={handleClick} />
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
  justify-content: space-around;
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

import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import LightButton from "components/LightButton";
import StatusBadge from "components/StatusBadge";
import Title from "components/Title";
import { IItemInfo } from "../../components/ListsDisplay";
import { useBreadcrumbContext } from "hooks/useBreadcrumbContext";

import EthereumIcon from "svgs/icons/ethereum.svg";
import GnosisIcon from "svgs/icons/gnosis.svg";

const NETWORK_ICONS = {
  gnosis: GnosisIcon,
  goerli: EthereumIcon,
};

const ListRow: React.FC<IItemInfo> = ({
  itemId,
  Icon,
  label,
  url,
  chainName,
  logoURI,
  itemsCount,
  status,
}) => {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  const { addItem } = useBreadcrumbContext();

  console.log({ pathname });
  const handleClick = () => {
    addItem(label);
    if (pathname === "/") pathname += "registry";
    navigate(`${pathname}/${itemId}`);
  };

  const NetworkIcon = chainName && NETWORK_ICONS[chainName];
  return (
    <StyledRow>
      <LeftSide>
        <Title {...{ Icon, text: label, logoURI, link: url }} />
      </LeftSide>
      <RightSide>
        {chainName && (
          <IconWrapper>
            <NetworkIcon />
          </IconWrapper>
        )}
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
  justify-content: space-between;
  width: 30%;
  font-size: 14px;
  label {
    width: 70px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const IconWrapper = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  svg {
    width: 100%:
    height: auto;
  }
`;

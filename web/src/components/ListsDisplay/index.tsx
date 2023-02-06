import React from "react";
import styled from "styled-components";

import { Card } from "@kleros/ui-components-library";
import ListRow from "./ListRow";
import PnkIcon from "svgs/icons/pnk.svg";

const data = [
  {
    Icon: PnkIcon,
    label: "Registries of contract domain names",
    itemsCount: 12,
    status: "Registered",
    link: "domain-names.xyz",
  },
  {
    Icon: PnkIcon,
    label: "Address Tags",
    itemsCount: 2,
    status: "Challenged",
  },
  {
    Icon: PnkIcon,
    label: "DeversiFi Storytelling - Standard Impact sdfsdfasfadf",
    itemsCount: 4,
    status: "Submitted",
    link: "domain-names.xyz",
  },
  {
    Icon: PnkIcon,
    label: "Insurance Data & Modelling",
    itemsCount: 8,
    status: "Submitted",
  },
];

const ListsDisplay: React.FC = () => {
  return (
    <StyledCard>
      {data &&
        data.map(({ Icon, label, link, itemsCount, status }, index) => (
          <ListRow key={index} {...{ Icon, label, link, itemsCount, status }} />
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

import React from "react";
import styled from "styled-components";

import { DropdownSelect } from "@kleros/ui-components-library";
import Title from "components/Title";

import EthereumIcon from "svgs/icons/ethereum.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Title large text="Ethereum" Icon={EthereumIcon} />
      <StyledLabel>
        {" "}
        All Community Curated Lists on{" "}
        <DropdownSelect
          simpleButton
          smallButton
          alignRight
          items={[
            { text: "Ethereum", value: 0 },
            { text: "Gnosis", value: 1 },
            { text: "Polygon", value: 2 },
          ]}
          defaultValue={0}
          callback={() => {}}
        />
      </StyledLabel>
    </Container>
  );
};
export default Header;

const Container = styled.div``;

const StyledLabel = styled.label`
  display: flex;
  gap: 8px;
  font-size: 16px;
  margin-top: 24px;
`;

import React, { useState } from "react";
import styled from "styled-components";
import { DropdownSelect, Switch } from "@kleros/ui-components-library";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 24%;
`;

const StyledLabel = styled.label`
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.primaryBlue};
`;

const Filters: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Container>
      <StyledLabel>
        NSFW Filter
        <Switch
          small
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
      </StyledLabel>
      <DropdownSelect
        smallButton
        simpleButton
        items={[
          { value: 0, text: "Most Active" },
          { value: 1, text: "Newest" },
          { value: 2, text: "Oldest" },
        ]}
        defaultValue={0}
        callback={() => {}}
      />
    </Container>
  );
};

export default Filters;

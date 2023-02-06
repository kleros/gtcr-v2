import React from "react";
import styled, { useTheme } from "styled-components";
import { Searchbar, DropdownSelect } from "@kleros/ui-components-library";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StyledSearchbar = styled(Searchbar)`
  flex: 1;
  flex-basis: 310px;
  input {
    font-size: 16px;
    height: 45px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

const Search: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <StyledSearchbar />
      <DropdownSelect
        items={[
          { text: "All Status", value: 0, dot: theme.primaryText },
          { text: "Sumbitted", value: 1, dot: theme.primaryBlue },
          { text: "Challenged", value: 2, dot: theme.warning },
          { text: "Pending", value: 3, dot: theme.stroke },
          { text: "Appealed", value: 4, dot: theme.error },
          { text: "Registered", value: 5, dot: theme.success },
          { text: "Removed", value: 6, dot: theme.secondaryText },
        ]}
        defaultValue={0}
        callback={() => {}}
      />
    </Container>
  );
};

export default Search;

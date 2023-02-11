import React, { useState } from "react";
import styled from "styled-components";

import { Tabs as TabsComponent } from "@kleros/ui-components-library";
import PaperScriptIcon from "svgs/icons/paper-script.svg";
import HistoryIcon from "svgs/icons/history.svg";

const TABS = [
  { text: "List", value: 0, Icon: PaperScriptIcon, path: "list" },
  { text: "History", value: 1, Icon: HistoryIcon, path: "history" },
];

const Tabs: React.FC<{ callback: (n: number) => void }> = ({ callback }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <StyledTabs
      currentValue={currentTab}
      items={TABS}
      callback={(n: number) => {
        setCurrentTab(n);
        callback(n);
      }}
    />
  );
};

export default Tabs;

const StyledTabs = styled(TabsComponent)`
  width: 100%;
  > * {
    display: flex;
    flex-wrap: wrap;
  }
`;

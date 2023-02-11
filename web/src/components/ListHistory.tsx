import React from "react";
import styled from "styled-components";

import { Card, Timeline } from "@kleros/ui-components-library";
import Title from "./Title";
import HistoryIcon from "svgs/icons/history.svg";

const ListHistory: React.FC = () => {
  return (
    <StyledCard>
      <Title text="History" Icon={HistoryIcon} />
      <TimelineArea>
        <StyledTimeline
          items={[
            {
              title: "List Created",
              party: "alice.eth",
              subtitle: "08 Jan 2019 03:00 UTC",
              rightSided: true,
            },
            {
              title: "List Challenged",
              party: "bob.eth",
              subtitle: "08 Jan 2019 02:00 UTC",
              variant: "refused",
              rightSided: true,
            },
            {
              title: "List Accepted",
              party: "bob.eth",
              subtitle: "08 Jan 2019 02:00 UTC",
              variant: "accepted",
              rightSided: true,
            },
          ]}
        />
      </TimelineArea>
    </StyledCard>
  );
};
export default ListHistory;

const StyledCard = styled(Card)`
  width: 100%;
  height: min-content;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledTimeline = styled(Timeline)`
  width: 25%;
  position: absolute;
  left: 0;
`;

const TimelineArea = styled.div`
  height: 10rem;
  margin: 0;
`;

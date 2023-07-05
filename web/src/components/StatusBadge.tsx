import React from "react";
import styled from "styled-components";

enum StatusColors {
  Submitted = "primaryBlue",
  Challenged = "warning",
  Pending = "stroke",
  Appealed = "error",
  Registered = "success",
  Removed = "secondaryText",
}

export type ItemStatus = keyof typeof StatusColors;

const StatusBadge: React.FC<{ status: ItemStatus }> = (p) => {
  const color = StatusColors[p.status as keyof typeof StatusColors];

  return (
    <Container color={color}>
      <Dot color={color} />
      <p>{p.status}</p>
    </Container>
  );
};

export default StatusBadge;

const Container = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
    font-size: 14px;
    color: ${(props) => props.theme[props.color]};
  }
`;

const Dot = styled.div<{ color: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.color]};
`;

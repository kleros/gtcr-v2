import React from "react";
import styled from "styled-components";

enum StatusColors {
  Submitted = "primaryBlue",
  Challenged = "warning",
  Pending = "stroke",
  Appealed = "error",
  Included = "success",
  Removed = "secondaryText",
}
interface IStatusBadgeProps {
  status: keyof typeof StatusColors | string;
}

const StatusBadge: React.FC<IStatusBadgeProps> = ({ status }) => {
  let color: string = StatusColors.Submitted;

  if (
    typeof status === "string" &&
    StatusColors[status as keyof typeof StatusColors]
  ) {
    color = StatusColors[status as keyof typeof StatusColors];
  }
  return (
    <Container color={color}>
      <Dot color={color} />
      <p>{status}</p>
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

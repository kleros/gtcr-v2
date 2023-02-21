import React from "react";
import styled from "styled-components";

export interface Status {
  color: string;
  label: string;
}

interface StatusColors {
  [key: string]: Status;
}

const DEFAULT_STATUS_COLORS: StatusColors = {
  Submitted: { color: "primaryBlue", label: "Submitted" },
  Challenged: { color: "warning", label: "Challenged" },
  Pending: { color: "stroke", label: "Pending" },
  Appealed: { color: "error", label: "Appealed" },
  Registered: { color: "success", label: "Registered" },
  Removed: { color: "secondaryText", label: "Removed" },
};

interface StatusBadgeProps {
  status: keyof StatusColors | string;
  statusColors?: StatusColors;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  statusColors = DEFAULT_STATUS_COLORS,
}) => {
  const color: string =
    statusColors[status]?.color || statusColors.Submitted.color;
  let label: string =
    statusColors[status]?.label || statusColors.Submitted.label;

  if (typeof status === "string" && !statusColors[status]) {
    label = status;
  }

  return (
    <Container color={color}>
      <Dot color={color} />
      <p>{label}</p>
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

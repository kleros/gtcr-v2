import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tooltip } from "@kleros/ui-components-library";

interface ITitle {
  text: string;
  Icon?: React.FC<React.SVGAttributes<SVGElement>>;
  link?: string;
}

const Title: React.FC<ITitle> = ({ Icon, text, link }) => (
  <Container>
    {Icon && <Icon />}
    <TrimmedText text={text} />
    {link && <Link to={link}>{link}</Link>}
  </Container>
);

export default Title;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
`;

const TrimmedText: React.FC<{ text: string; maxLength?: number }> = ({
  text,
  maxLength = 40,
}) => {
  if (text.length <= maxLength) return <Text>{text}</Text>;
  return (
    <StyledTooltip small text={text}>
      <p>{text.slice(0, maxLength)}...</p>
    </StyledTooltip>
  );
};

const Text = styled.p`
  width: 50%;
  margin-right: 12px;
`;
const StyledTooltip = styled(Tooltip)`
  width: 50%;
  margin-right: 12px;
`;

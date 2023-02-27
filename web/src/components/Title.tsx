import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tooltip } from "@kleros/ui-components-library";

interface ITitle {
  text: string;
  Icon?: React.FC<React.SVGAttributes<SVGElement>>;
  link?: string;
  logoURI?: string;
  large?: boolean;
}

const Title: React.FC<ITitle> = ({
  Icon,
  text,
  link,
  logoURI,
  large = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <Container>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}

      {logoURI && (
        <ImageContainer>
          <img
            src={`https://ipfs.kleros.io${logoURI}`}
            alt="dsfs"
            onLoad={handleImageLoad}
            style={{ display: isLoaded ? "block" : "none" }}
          />
        </ImageContainer>
      )}

      <TrimmedText {...{ text, large }} />
      {link && <Link to={link}>{link}</Link>}
    </Container>
  );
};

export default Title;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  svg {
    width: 100%;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  width: 32px;
  margin-right: 1rem;
  img {
    width: 100%;
    heigth: auto;
    object-fit: contain;
  }
`;

const TrimmedText: React.FC<{
  text: string;
  large?: boolean;
  maxLength?: number;
}> = ({ text, large, maxLength = 40 }) => {
  const StyledText = large ? LargeText : Text;

  if (text.length <= maxLength) return <StyledText>{text}</StyledText>;
  return (
    <StyledTooltip small text={text}>
      <StyledText>{text.slice(0, maxLength)}...</StyledText>
    </StyledTooltip>
  );
};

const Text = styled.p`
  width: 50%;
  margin-right: 12px;
`;

const LargeText = styled(Text)`
  font-size: 24px;
`;

const StyledTooltip = styled(Tooltip)`
  width: 50%;
  margin-right: 12px;
`;

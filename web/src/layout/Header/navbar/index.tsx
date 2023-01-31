import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap-x: 3rem;
`;

const LinkContainer = styled.div`
  .sm-link {
    color: ${({ theme }) => theme.secondaryText};
    text-decoration: none;
    font-size: 16px;
    margin-right: 1.5rem;
  }
`;

const links = [
  { to: "/cases", text: "Curation Policy" },
  { to: "/courts", text: "Integrate your product" },
];

const NavBar: React.FC = () => (
  <Container>
    {links.map(({ to, text }) => (
      <LinkContainer key={text}>
        <Link {...{ to }} className="sm-link">
          {text}
        </Link>
      </LinkContainer>
    ))}
  </Container>
);

export default NavBar;

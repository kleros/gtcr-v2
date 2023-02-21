import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import KlerosCourtLogo from "svgs/header/kleros-court.svg";
import NavBar from "./navbar";
import ConnectButton from "../../components/ConnectButton";
import Menu from "./navbar/Menu";

const Container = styled.div`
  position: sticky;
  z-index: 9999;
  top: 0;
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.primaryPurple};

  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .kleros-court-link {
    min-height: 48px;
  }

  .menu {
    display: flex;
    align-items: center;
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Link className="kleros-court-link" to={"/"}>
        <KlerosCourtLogo />
      </Link>
      <NavBar />
      <div className="menu">
        <ConnectButton />
        <Menu />
      </div>
    </Container>
  );
};

export default Header;

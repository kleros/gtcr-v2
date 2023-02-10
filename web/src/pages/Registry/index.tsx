import React, { useMemo } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Breadcrumb } from "@kleros/ui-components-library";
import ListsByNetwork from "./ListsByNetwork";
import List from "./List";
import Item from "./Item";

const Regisrty: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  console.log(location.key);

  const items = useMemo(() => {
    if (location.pathname === "/registry/1")
      return [
        { text: "home", value: 0 },
        { text: "Ethereum", value: 1 },
      ];
    if (location.pathname === "/registry/1/2")
      return [
        { text: "home", value: 0 },
        { text: "Ethereum", value: 1 },
        { text: "Address Tags", value: 2 },
      ];
    if (location.pathname === "/registry/1/2/3")
      return [
        { text: "home", value: 0 },
        { text: "Ethereum", value: 1 },
        { text: "Address Tags", value: 2 },
        { text: "ENS: Public Resolver 2", value: 3 },
      ];
    return [{ text: "home", value: 0 }];
  }, [location.pathname]);

  const handleClick = (value: number) => {
    console.log(items.length);
    console.log(value);
    navigate(-items.length + 1 + value);
  };
  return (
    <Container>
      {items && (
        <StyledBreadcrumb items={items} clickable callback={handleClick} />
      )}
      <Routes>
        <Route path="/:id" element={<ListsByNetwork />} />
        <Route path="/:id/:address" element={<List />} />
        <Route path="/:id/:address/:item" element={<Item />} />
      </Routes>
    </Container>
  );
};

export default Regisrty;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  height: auto;
  padding: 32px 0;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 48px 0 24px 0;
`;

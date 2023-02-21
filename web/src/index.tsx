import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { HashRouter as Router } from "react-router-dom";
import Web3Provider from "./context/Web3Provider";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Router>
      <Web3Provider>
        <App />
      </Web3Provider>
    </Router>
  </React.StrictMode>
);

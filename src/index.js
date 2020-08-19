import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/index.css";
import { ThemeProvider } from "@chakra-ui/core";
import CustomTheme from "./theme/CustomTheme";

ReactDOM.render(
  <ThemeProvider theme={CustomTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

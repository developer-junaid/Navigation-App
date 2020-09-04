import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.querySelector("#root")
);

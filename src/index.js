import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import store from "./reducer";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

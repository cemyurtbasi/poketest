import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
// import "antd/dist/antd.css";
import "./Assets/styles/font/stylesheet.css";
import "./Assets/styles/css/main.css";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);

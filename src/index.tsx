import React from "react";
import ReactDOM from "react-dom/client";

import "assets/styles/animate.css";
import "assets/styles/bootstrap-datepicker.css";
import "assets/styles/bootstrap.min.css";
import "assets/styles/flaticon.css";
import "assets/styles/jquery.timepicker.css";
import "assets/styles/magnific-popup.css";
import "assets/styles/owl.carousel.min.css";
import "assets/styles/owl.theme.default.min.css";
import "assets/css/index.css";

import "bootstrap/dist/js/bootstrap.min.js";
import "./i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

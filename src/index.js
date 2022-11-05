import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "antd/dist/antd.min.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/rootReducer";
import AppRoute from "./routes/route";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </React.StrictMode>
);

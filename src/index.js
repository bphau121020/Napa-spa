import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "antd/dist/antd.min.css";
import "./index.css"
import Layouts from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  </React.StrictMode>
);

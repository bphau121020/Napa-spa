import React from "react";
import { Route, Routes } from "react-router-dom";

import Payroll from "../pages/Payroll";
import Users from "../pages/User";
import Workflows from "../pages/Workflow";

const Routejs = () => {
  return (
    <Routes>
      <Route path="/" element={<Workflows />} />
      <Route path="/user" element={<Users />} />
      <Route path="/payroll" element={<Payroll />} />
    </Routes>
  );
};

export default Routejs;

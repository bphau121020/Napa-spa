import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from "../components/auth/AuthGuard";
import AuthLayout from "../layouts/auth/AuthLayout";
import MainLayout from "../layouts/main/MainLayout";
import Payroll from "../pages/PayRoll/Payroll";
import User from "../pages/User/User";
import Workflow from "../pages/WorkFlow/Workflow";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthGuard>
              <MainLayout />
            </AuthGuard>
          }
        >
          <Route index element={<Workflow />} />
          <Route path="/user" element={<User />} />
          <Route path="/payroll" element={<Payroll />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;

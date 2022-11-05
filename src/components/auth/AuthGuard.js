import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { isLogged } = useSelector((state) => state.auth);

  if (!isLogged) return <Navigate to="/auth" replace />;
  return children;
};

export default AuthGuard;

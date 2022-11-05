import { createContext, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  useEffect(() => {}, []);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContext;

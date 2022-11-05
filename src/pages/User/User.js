import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const { isLogged, user } = useSelector((state) => state.auth);

  return <div>{isLogged ? user.name : "login"}</div>;
};

export default User;

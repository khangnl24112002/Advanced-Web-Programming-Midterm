import React from "react";
import { useOutlet } from "react-router-dom";
import "../../style.css";
const AuthLayout = () => {
  const outlet = useOutlet();

  return <div>{outlet}</div>;
};

export default AuthLayout;

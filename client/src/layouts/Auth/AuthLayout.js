import React from "react";
import { useOutlet } from "react-router-dom";
import "../../style.css";

const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">{outlet}</div>
    </div>
  );
};

export default AuthLayout;

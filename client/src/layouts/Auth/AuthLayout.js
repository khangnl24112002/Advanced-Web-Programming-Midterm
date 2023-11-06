import React from "react";
import { useOutlet } from "react-router-dom";
const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <div>
      AuthLayout
      {outlet}
    </div>
  );
};

export default AuthLayout;

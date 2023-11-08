/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../style.css";
import SignInForm from "../../components/SignInForm/SignInForm";
const SignIn = () => {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;

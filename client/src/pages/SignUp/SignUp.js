import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
const SignUp = () => {
  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;

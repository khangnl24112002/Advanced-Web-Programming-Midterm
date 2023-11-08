import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>LandingPage</div>
      <button
        onClick={() => {
          navigate("/auth/sign-in");
        }}
      >
        Sign in
      </button>
    </div>
  );
};

export default LandingPage;

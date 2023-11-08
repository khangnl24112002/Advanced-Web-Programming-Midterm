import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="First name">First Name</label>
            <input
              type="text"
              placeholder="First name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Last name">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="form-control"
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Sign In</button>
          </div>
          <p className="text-end mt-2">
            Already registered?
            <Link to="../sign-in" className="ms-2">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

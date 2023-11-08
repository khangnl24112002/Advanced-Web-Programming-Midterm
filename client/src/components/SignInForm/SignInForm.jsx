/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
const SignInForm = () => {
    return (
        <form>
            <h3 className="text-center">Sign In</h3>
            <FormInput type="email" name="Email" placeholder="Enter Email" />
            <FormInput
                type="password"
                name="Password"
                placeholder="Enter Password"
            />
            <div>
                <input
                    type="checkbox"
                    className="custom-control custom-checkbox"
                    id="check"
                />
                <label htmlFor="check" className="custom-input-label ms-2">
                    Remember Me
                </label>
            </div>
            <div className="d-grid">
                <Button name="Sign In" />
            </div>
            <p className="text-end mt-2">
                Forgot <a href="">Password</a>
                <Link to="../sign-up" className="ms-2">
                    Sign up
                </Link>
            </p>
        </form>
    )
}

export default SignInForm
import React from 'react'
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput"
import Button from "../../components/Button/Button"

const SignUpForm = () => {
    return (
        <form>
            <h3 className="text-center">Sign In</h3>
            <FormInput type="text" name="First Name" placeholder="Enter First Name" />
            <FormInput type="text" name="Last Name" placeholder="Enter Last Name" />
            <FormInput type="email" name="Email" placeholder="Enter Your Email" />
            <FormInput type="password" name="Password" placeholder="Enter Password" />
            <FormInput type="password" name="Confirm Password" placeholder="Enter Confirm Password" />
            <div className="d-grid">
                <Button name="Sign Up" />
            </div>
            <p className="text-end mt-2">
                Already registered?
                <Link to="../sign-in" className="ms-2">
                    Sign In
                </Link>
            </p>
        </form>
    )
}

export default SignUpForm
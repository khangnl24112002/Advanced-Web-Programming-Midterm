import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput"
import Button from "../../components/Button/Button"
import { Form } from 'react-bootstrap';
const SignUpForm = () => {
    const [userAccount, setUserAccount] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userAccount);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setUserAccount((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    return (
        <Form onSubmit={handleSubmit}>
            <h3 className="text-center">Sign In</h3>
            <FormInput type="text" name="firstName" placeholder="Enter First Name" title="First Name" onChange={handleChange} />
            <FormInput type="text" name="lastName" placeholder="Enter Last Name" title="Last Name" onChange={handleChange} />
            <FormInput type="email" name="email" placeholder="Enter Your Email" title="Email" onChange={handleChange} />
            <FormInput type="password" name="password" placeholder="Enter Password" title="Password" onChange={handleChange} />
            <FormInput type="password" name="confirmPassword" placeholder="Enter Confirm Password" title="Confirm Password" onChange={handleChange} />
            <div className="d-grid">
                <Button name="Sign Up" />
            </div>
            <p className="text-end mt-2">
                Already registered?
                <Link to="../sign-in" className="ms-2">
                    Sign In
                </Link>
            </p>
        </Form>
    )
}

export default SignUpForm
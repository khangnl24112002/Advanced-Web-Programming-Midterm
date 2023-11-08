import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput"
import Button from "../../components/Button/Button"
import { Form } from 'react-bootstrap';
import { authServices } from '../../services/AuthServices';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

const SignUpForm = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
    const [userAccount, setUserAccount] = useState(initialState);

    const [errors, setErrors] = useState(initialState);

    const [submitResult, setSubmitResult] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValidData = validateData(userAccount);
        if (isValidData) {
            const { confirmPassword, ...userData } = userAccount;
            const response = await authServices.signup(userData);
            if (response.status === true) {
                navigate("/");
            }
            else {
                setSubmitResult(response.message);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserAccount((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const validateData = (userAccount) => {
        let result = 1;
        setErrors(initialState);
        if (userAccount.email === '') {
            setErrors((prevState) => ({
                ...prevState,
                email: "Email must be required"
            }))
            result = 0;
        }
        if (userAccount.password === '') {
            setErrors((prevState) => ({
                ...prevState,
                password: "Password must be required"
            }))
            result = 0;
        }
        if (userAccount.firstName === '') {
            setErrors((prevState) => ({
                ...prevState,
                firstName: "First name must be required"
            }))
            result = 0;
        }
        if (userAccount.lastName === '') {
            setErrors((prevState) => ({
                ...prevState,
                lastName: "Last name must be required"
            }))
            result = 0;
        }
        if (userAccount.confirmPassword === '') {
            setErrors((prevState) => ({
                ...prevState,
                confirmPassword: "Confirm password must be required"
            }))
            result = 0;
        }
        if (userAccount.password !== userAccount.confirmPassword) {
            setErrors((prevState) => ({
                ...prevState,
                confirmPassword: "Confirm password and password must be the same"
            }))
            result = 0;
        }
        return result;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h3 className="text-center">Sign In</h3>
            <FormInput type="text" name="firstName" placeholder="Enter First Name" title="First Name" onChange={handleChange} error={errors.firstName} />
            <FormInput type="text" name="lastName" placeholder="Enter Last Name" title="Last Name" onChange={handleChange} error={errors.lastName} />
            <FormInput type="email" name="email" placeholder="Enter Your Email" title="Email" onChange={handleChange} error={errors.email} />
            <FormInput type="password" name="password" placeholder="Enter Password" title="Password" onChange={handleChange} error={errors.password} />
            <FormInput type="password" name="confirmPassword" placeholder="Enter Confirm Password" title="Confirm Password" onChange={handleChange} error={errors.confirmPassword} />
            {submitResult !== '' ? <Alert className='my-3' variant='danger'>{submitResult}</Alert> : null}
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
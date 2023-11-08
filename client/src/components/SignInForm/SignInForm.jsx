/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { Form } from "react-bootstrap"
import { authServices } from '../../services/AuthServices';
import Alert from 'react-bootstrap/Alert';
import { useAuth } from "../../hooks/useAuth"

const SignInForm = () => {

    const [userAccount, setUserAccount] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const [submitResult, setSubmitResult] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValidData = validateData(userAccount);
        if (isValidData) {
            const response = await authServices.login(userAccount);
            if (response.status === true) {
                setSubmitResult(response.data.message)
                login(response.data.user, response.data.token);
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
        if (userAccount.email === '') {
            setErrors((prevState) => ({
                ...prevState,
                email: "Email must be required"
            }))
            return 0;
        }
        if (userAccount.password === '') {
            setErrors((prevState) => ({
                ...prevState,
                password: "Password must be required"
            }))
            return 0;
        }
        return 1;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h3 className="text-center">Sign In</h3>
            <FormInput error={errors.email} type="email" name="email" title="Email" placeholder="Enter Email" value={userAccount.email} onChange={handleChange} />
            <FormInput
                type="password"
                name="password"
                title="Password"
                placeholder="Enter Password"
                value={userAccount.password}
                onChange={handleChange}
                error={errors.password}
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
                <Alert className='my-3' variant='danger'>{submitResult}</Alert>
            </div>
            <div className="d-grid">
                <Button type="submit" name="Sign In" />
            </div>
            <p className="text-end mt-2">
                Forgot <a href="">Password</a>
                <Link to="../sign-up" className="ms-2">
                    Sign up
                </Link>
            </p>
        </Form>
    )
}

export default SignInForm
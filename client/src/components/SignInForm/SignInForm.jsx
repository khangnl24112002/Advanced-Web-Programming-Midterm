/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { Form } from "react-bootstrap"
import { authServices } from '../../services/AuthServices';
import Alert from 'react-bootstrap/Alert';
import { useAuth } from "../../hooks/useAuth"
import LoadingModal from '../LoadingModal/LoadingModal';

const SignInForm = () => {

    const initalState = {
        email: "",
        password: "",
    }
    const [modalShow, setModalShow] = React.useState(false);
    const [userAccount, setUserAccount] = useState(initalState);
    const [errors, setErrors] = useState(initalState);
    const [submitResult, setSubmitResult] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setModalShow(true);
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
        setModalShow(false);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserAccount((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const validateData = (userAccount) => {
        setErrors(initalState)
        let result = 1;
        console.log(userAccount)
        if (userAccount.email === '') {
            setErrors((prevState) => ({
                ...prevState,
                email: "Email không được để trống"
            }))
            result = 0;
        }
        if (userAccount.password === '') {
            setErrors((prevState) => ({
                ...prevState,
                password: "Mật khẩu không được để trống"
            }))
            result = 0;
        }
        return result;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h3 className="text-center">Đăng nhập</h3>
            <FormInput error={errors.email} type="email" name="email" title="Địa chỉ Email" placeholder="Nhập Email" value={userAccount.email} onChange={handleChange} />
            <FormInput
                type="password"
                name="password"
                title="Mật khẩu"
                placeholder="Nhập mật khẩu"
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
                    Ghi nhớ thông tin đăng nhập
                </label>
                {submitResult !== '' ? <Alert className='my-3' variant='danger'>{submitResult}</Alert> : null}
            </div>
            <div className="d-grid my-3">
                <Button type="submit" name="Đăng nhập" />
            </div>
            <p className="text-center mt-2">
                Chưa có tài khoản ?
                <Link to="../sign-up" className="ms-2">
                    Đăng ký ngay
                </Link>
            </p>
            <LoadingModal show={modalShow} />
        </Form>
    )
}

export default SignInForm
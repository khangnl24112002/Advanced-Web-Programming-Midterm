import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput"
import Button from "../../components/Button/Button"
import { Form } from 'react-bootstrap';
import { authServices } from '../../services/AuthServices';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import LoadingModal from '../LoadingModal/LoadingModal';

const SignUpForm = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const [modalShow, setModalShow] = React.useState(false);
    const [userAccount, setUserAccount] = useState(initialState);

    const [errors, setErrors] = useState(initialState);

    const [submitResult, setSubmitResult] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setModalShow(true);
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
        let result = 1;
        setErrors(initialState);
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
        if (userAccount.firstName === '') {
            setErrors((prevState) => ({
                ...prevState,
                firstName: "Tên không được để trống"
            }))
            result = 0;
        }
        if (userAccount.lastName === '') {
            setErrors((prevState) => ({
                ...prevState,
                lastName: "Họ không được để trống"
            }))
            result = 0;
        }
        if (userAccount.confirmPassword === '') {
            setErrors((prevState) => ({
                ...prevState,
                confirmPassword: "Xác nhận mật khẩu không được để trống"
            }))
            result = 0;
        }
        if (userAccount.password !== userAccount.confirmPassword) {
            setErrors((prevState) => ({
                ...prevState,
                confirmPassword: "Xác nhận mật khẩu không trùng khớp"
            }))
            result = 0;
        }
        return result;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h3 className="text-center">Đăng ký</h3>
            <FormInput type="text" name="firstName" placeholder="Nhập tên" title="Tên của bạn" onChange={handleChange} error={errors.firstName} />
            <FormInput type="text" name="lastName" placeholder="Nhập họ" title="Họ của bạn" onChange={handleChange} error={errors.lastName} />
            <FormInput type="email" name="email" placeholder="Nhập email" title="Địa chỉ Email" onChange={handleChange} error={errors.email} />
            <FormInput type="password" name="password" placeholder="Nhập mật khẩu" title="Mật khẩu" onChange={handleChange} error={errors.password} />
            <FormInput type="password" name="confirmPassword" placeholder="Nhập lại mật khẩu" title="Xác nhận mật khẩu" onChange={handleChange} error={errors.confirmPassword} />
            {submitResult !== '' ? <Alert className='my-3' variant='danger'>{submitResult}</Alert> : null}
            <div className="d-grid my-3 ">
                <Button name="Đăng ký" />
            </div>
            <p className="text-center mt-2">
                Đã có tài khoản ?
                <Link to="../sign-in" className="ms-2">
                    Đăng nhập
                </Link>
            </p>
            <LoadingModal show={modalShow} />
        </Form>
    )
}

export default SignUpForm
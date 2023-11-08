/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { Form } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import { authServices } from "../../services/AuthServices";
import { useAuth } from "../../hooks/useAuth";

import "./styles.css";

const EditProfileForm = ({ user, isEditing, toggleEdit }) => {
    const initalState = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        id: user.id,
    };
    const initalErrors = {
        email: "",
        firstName: "",
        lastName: "",
    };

    const [userAccount, setUserAccount] = useState(initalState);
    const [errors, setErrors] = useState(initalErrors);
    const [submitResult, setSubmitResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValidData = validateData(userAccount);
        if (isValidData) {
            // const response = await authServices.edit(userAccount);
            // if (response.status === true) {
            //     setSubmitResult(response.data.message);
            // } else {
            //     setSubmitResult(response.message);
            // }
        }
        console.log(userAccount);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserAccount((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateData = (userAccount) => {
        setErrors(initalErrors);
        let result = 1;
        console.log(userAccount);
        if (userAccount.email === "") {
            setErrors((prevState) => ({
                ...prevState,
                email: "Email must be required",
            }));
            result = 0;
        }
        if (userAccount.firstName === "") {
            setErrors((prevState) => ({
                ...prevState,
                firstName: "First Name is required",
            }));
            result = 0;
        }
        if (userAccount.lastName === "") {
            setErrors((prevState) => ({
                ...prevState,
                lastName: "Last Name is required",
            }));
            result = 0;
        }
        return result;
    };

    return (
        <div className="editContainer">
            <div
                style={
                    isEditing
                        ? { display: "flex", flexDirection: "row" }
                        : { display: "flex", flexDirection: "row-reverse" }
                }
            >
                {isEditing && (
                    <div
                        className="backButton"
                        onClick={() => {
                            console.log("pressed");
                            toggleEdit(false);
                        }}
                    >
                        Back
                    </div>
                )}
                {!isEditing && (
                    <div
                        className="forwardButton"
                        onClick={() => {
                            console.log("pressed");
                            toggleEdit(true);
                        }}
                    >
                        Edit
                    </div>
                )}
            </div>
            <Form onSubmit={handleSubmit}>
                <div className="editIntro">
                    <h3 className="text-center">
                        {isEditing ? "Edit" : "Your"} profile
                    </h3>
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="editContext">
                    <FormInput
                        type="email"
                        name="email"
                        title="Email"
                        placeholder="Change Email"
                        value={userAccount.email}
                        onChange={handleChange}
                        error={errors.email}
                        disabled={!isEditing}
                    />
                    <div className="formInputLine">
                        <FormInput
                            type="firstName"
                            name="firstName"
                            title="First Name"
                            placeholder="Enter First Name"
                            value={userAccount.firstName}
                            onChange={handleChange}
                            error={errors.firstName}
                            disabled={!isEditing}
                        />
                        <FormInput
                            type="lastName"
                            name="lastName"
                            title="First Name"
                            placeholder="Enter Last Name"
                            value={userAccount.lastName}
                            onChange={handleChange}
                            error={errors.lastName}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="hiddenElement">
                        <FormInput
                            type="id"
                            name="id"
                            value={userAccount.id}
                            onChange={handleChange}
                        />
                    </div>
                    {submitResult !== "" ? (
                        <Alert className="my-3" variant="danger">
                            {submitResult}
                        </Alert>
                    ) : null}
                    {isEditing && (
                        <div className="d-grid">
                            <Button type="submit" name="Edit" />
                        </div>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default EditProfileForm;

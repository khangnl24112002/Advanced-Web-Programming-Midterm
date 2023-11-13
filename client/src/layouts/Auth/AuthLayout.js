import React from "react";
import { useOutlet } from "react-router-dom";
import "./style.css";
import "../../style.css";
const AuthLayout = () => {
    const outlet = useOutlet();

    return (
        <div className="authLayout d-flex justify-content-center align-items-center vh-100 bg-image">
            <div
                style={{ borderRadius: "20px" }}
                className="form_container p-5 bg-white shadow-lg"
            >
                {outlet}
            </div>
        </div>
    );
};

export default AuthLayout;

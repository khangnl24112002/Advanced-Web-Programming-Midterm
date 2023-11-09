import React from "react";
import { useOutlet } from "react-router-dom";
import "../../style.css";
const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-image"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=1060&t=st=1699518984~exp=1699519584~hmac=d26b8c2bcd19bbe92b805783447dab7fa542ffabce70fcb46c307e1b8fd79776")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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

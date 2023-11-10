import React from "react";
import "./style.css";

const UserCard = ({ email, firstName, lastName, status, image }) => {
    return (
        <div className="userCard">
            <p className="name">{firstName + " " + lastName}</p>
            <p className="email">Email: {email}</p>
            <p>
                Status:{" "}
                <span
                    className={
                        status === "online" ? "onlineStatus" : "offlineStatus"
                    }
                >
                    {status}
                </span>
            </p>
            <div className="imageContainer">
                <img className="image" src={image} alt={email} />
            </div>
        </div>
    );
};

export default UserCard;

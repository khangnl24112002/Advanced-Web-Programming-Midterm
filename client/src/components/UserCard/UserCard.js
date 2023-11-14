import React from "react";
import "./style.css";

import cn from "classnames";
import styles from "./UserCard.module.sass";

const UserCard = ({ email, firstName, lastName, status, image }) => {
    return (
        <div className={styles.userCard}>
            <div className={cn("h4", styles.title)}>
                {firstName + " " + lastName}
            </div>
            <p className="email">Email: {email}</p>
            <p>
                Trạng thái:{" "}
                <span
                    className={
                        status === "online" ? "onlineStatus" : "offlineStatus"
                    }
                >
                    {status}
                </span>
            </p>
            <div className="imageContainer">
                <img className="image" src={image} alt="" />
            </div>
        </div>
    );
};

export default UserCard;

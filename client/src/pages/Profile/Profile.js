import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import EditProfileForm from "../../components/EditProfileForm/EditProfileForm";

import "./styles.css";

const Profile = () => {
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout();
    };
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div>
            <div className="userActions">
                <div>
                    <p style={{ fontWeight: 600 }}>
                        Welcome back, {user.firstName}
                    </p>
                </div>
                <button onClick={() => handleLogout()}>Log out</button>
            </div>
            <EditProfileForm
                user={user}
                isEditing={isEditing}
                toggleEdit={(value) => setIsEditing(value)}
            />
        </div>
    );
};

export default Profile;

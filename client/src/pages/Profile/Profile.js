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
            <EditProfileForm
                user={user}
                isEditing={isEditing}
                toggleEdit={(value) => setIsEditing(value)}
            />
        </div>
    );
};

export default Profile;

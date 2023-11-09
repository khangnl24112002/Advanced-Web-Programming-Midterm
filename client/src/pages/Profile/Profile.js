import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import EditProfileForm from "../../components/EditProfileForm/EditProfileForm";

import "./styles.css";

const Profile = () => {
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const getToken = () => localStorage.getItem("access_token");
    console.log(getToken());
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

import React from "react";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <div>Profile Page</div>
      <div>Hello, {user.firstName}</div>
      <button onClick={() => handleLogout()}>Log out</button>
    </div>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import "./style.css";
import UserCard from "../../components/UserCard/UserCard";

import { userServices } from "../../services/UserServices";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

let statusArr = ["Online", "Offline"];

let avatarArr = ["/assets/male-avatar.jpg", "/assets/female-avatar.jpg"];

const randomStatus = () =>
  statusArr[Math.floor(Math.random() * statusArr.length)];

const randomAvatar = () =>
  avatarArr[Math.floor(Math.random() * avatarArr.length)];

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      return await userServices.getAll();
    };
    fetchUsers()
      .then((result) => {
        setUsers(result.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="homeScreen">
      {isLoading && <LoadingSpinner />}
      {users && (
        <div className="userContainer">
          {users.map((user) => (
            <UserCard
              key={user.email}
              firstName={user.firstName}
              lastName={user.lastName}
              status={randomStatus()}
              email={user.email}
              image={randomAvatar()}
            />
          ))}
        </div>
      )}
      {!users && <p>User Home Screen</p>}
    </div>
  );
};

export default Home;

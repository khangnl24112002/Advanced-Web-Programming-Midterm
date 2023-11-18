import React, { useEffect, useState } from "react";
import "./style.css";
import UserCard from "../../components/UserCard/UserCard";

import { userServices } from "../../services/UserServices";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { useAuth } from "../../hooks/useAuth";

let statusArr = ["Online", "Offline"];

let avatarArr = ["/assets/male-avatar.jpg", "/assets/female-avatar.jpg"];

const randomStatus = () =>
    statusArr[Math.floor(Math.random() * statusArr.length)];

const randomAvatar = () =>
    avatarArr[Math.floor(Math.random() * avatarArr.length)];

const Home = () => {
    const { token } = useAuth();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const response = await userServices.getAll(token);
            console.log(response);
            const responseData = await response.data;
            console.log(responseData);
            const loadUsers = [];
            for (const key in responseData) {
                loadUsers.push({
                    key: key,
                    firstName: responseData[key].firstName,
                    lastName: responseData[key].lastName,
                    email: responseData[key].email,
                });
            }
            setUsers(loadUsers);
            setIsLoading(false);
        };

        fetchData();
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

import React, { useEffect, useState } from "react";
import "./style.css";
import UserCard from "../../components/UserCard/UserCard";

import { userServices } from "../../services/UserServices";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

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
    console.log(users);
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
                            status={"Offline"}
                            email={user.email}
                            image={
                                "https://previews.123rf.com/images/besignmn/besignmn2003/besignmn200300002/141628717-line-icon-of-the-user-or-avatar-rounded-and-thin-line-icon-for-your-website-menu-on-the-light-blue.jpg"
                            }
                        />
                    ))}
                </div>
            )}
            {!users && <p>User Home Screen</p>}
        </div>
    );
};

export default Home;

import React, { useEffect, useState } from "react";
import "./style.css";
import UserCard from "../../components/UserCard/UserCard";

import { userServices } from "../../services/UserServices";

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            return await userServices.getAll();
        };
        fetchUsers()
            .then((result) => {
                setUsers(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(users);
    return (
        <div className="homeScreen">
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
                                "https://cdn-icons-png.flaticon.com/512/21/21104.png"
                            }
                        />
                    ))}
                </div>
            )}
            {!users && <p>Khong users</p>}
        </div>
    );
};

export default Home;

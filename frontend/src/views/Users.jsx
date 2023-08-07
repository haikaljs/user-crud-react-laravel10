import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";

const Users = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {}, []);

    const getUser = () => {
        setLoading(true);
        axiosClient
            .get("/users")
            .then(({ data }) => {
                setLoading(false);
                console.log(data);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return <div>Users</div>;
};

export default Users;

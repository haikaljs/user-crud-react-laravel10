import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Outlet, Navigate } from "react-router-dom";

const GuestLayout = () => {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default GuestLayout;

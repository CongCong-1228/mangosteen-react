import { Navigate, Outlet } from "react-router-dom"
import React from "react";
import { useLocalStore } from "../stores/useLocalStore";

export const Root: React.FC = () => {
    const { hasReadWelcomes } = useLocalStore()
    console.log(hasReadWelcomes)
    if (hasReadWelcomes) {
        return <Navigate to="/home" />
    } else {
        return <Navigate to="/welcome/1" />
    }
}

import { Outlet } from "react-router-dom"
import React from "react";

export const MainLayout: React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

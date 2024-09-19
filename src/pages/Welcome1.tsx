import { NavLink } from "react-router-dom"
import React from "react";
import welcome1 from "../assets/images/welcome1.svg"

export const Welcome1: React.FC = () => {
    return (
        <div flex flex-col items-center justify-center>
            <img src={welcome1} alt="welcome1" w-148px />
            <h2 text-center>
                会挣钱 <br />
                还要会省钱
            </h2>
        </div>
    )
}

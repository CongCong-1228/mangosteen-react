import { NavLink } from "react-router-dom"
import React from "react";
import welcome2 from '../assets/images/welcome2.svg'

export const Welcome2: React.FC = () => {
    return (
        <div>
            <img src={welcome2} alt="welcome2" />
            <h2 text-center fw-bold mt-10px>
                会挣钱 <br />
                还要会省钱
            </h2>
        </div>
    )
}

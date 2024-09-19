import { NavLink } from "react-router-dom"
import React from "react";
import welcome4 from '../assets/images/welcome4.svg'

export const Welcome4: React.FC = () => {
    return (
        <div>
            <img src={welcome4} alt="welcome4" />
            <h2 text-center fw-bold mt-10px>
                会挣钱 <br />
                还要会省钱
            </h2>
        </div>
    )
}

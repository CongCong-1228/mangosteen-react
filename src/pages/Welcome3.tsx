import { NavLink } from "react-router-dom"
import React from "react";
import welcome3 from '../assets/images/welcome3.svg'
export const Welcome3: React.FC = () => {
    return (
        <>
            <img src={welcome3} alt="welcome1" />
            <h2 text-center fw-bold mt-10px>
                会挣钱 <br />
                还要会省钱
            </h2>
        </>
    )
}

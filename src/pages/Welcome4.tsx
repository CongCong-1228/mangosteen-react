import { NavLink } from "react-router-dom"
import React from "react";
import welcome4 from '../assets/images/welcome4.svg'

export const Welcome4: React.FC = () => {
    return (
        <div flex flex-col items-center justify-center>
            <img src={welcome4} alt="welcome4" w-148px />
            <h2 text-center>
                云备份 <br />
                小兔子们帮你管理预算
            </h2>
        </div>
    )
}

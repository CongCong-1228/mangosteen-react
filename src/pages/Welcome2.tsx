import { NavLink } from "react-router-dom"
import React from "react";
import welcome2 from '../assets/images/welcome2.svg'

export const Welcome2: React.FC = () => {
    return (
        <div flex flex-col items-center justify-center>
            <img src={welcome2} alt="welcome2" w-148px />
            <h2 text-center>
                每日提醒<br />
                轻松掌握你的每一笔开支！
            </h2>
        </div>
    )
}

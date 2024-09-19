import { NavLink } from "react-router-dom"
import React from "react";
import welcome3 from '../assets/images/welcome3.svg'
export const Welcome3: React.FC = () => {
    return (
        <div flex flex-col items-center justify-center>
            <img src={welcome3} alt="welcome3" w-148px />
            <h2 text-center>
                数据可视化 <br />
                用数据帮你理清财务计划
            </h2>
        </div>
    )
}

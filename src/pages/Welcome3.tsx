import React from "react";
import penguin from "../assets/images/penguin.svg"

export const Welcome3: React.FC = () => {
    return (
        <div flex flex-col items-center justify-center>
            <img src={penguin} alt="welcome3" w-148px />
            <h2 text-center>
                数据可视化 <br />
                用数据帮你理清财务计划
            </h2>
        </div>
    )
}

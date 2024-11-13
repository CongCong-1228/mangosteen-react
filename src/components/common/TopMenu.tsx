import styled from "styled-components";
import { Icon } from "./Icon";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { tr } from "@faker-js/faker/.";

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}
const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 6px;

  .icon {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;

const Items = [
  {
    key: "chart",
    icon: "chart",
    text: "统计图表",
    to: "/chart",
  },
  {
    key: "export",
    icon: "export",
    text: "导出数据",
    to: "/export",
  },
  {
    key: "category",
    icon: "category",
    text: "自定义分类",
    to: "/category",
  },
  {
    key: "noty",
    icon: "noty",
    text: "记账提醒",
    to: "/noty",
  },
];

export const TopMenu: React.FC<IProps> = ({ visible, setVisible }) => {
  const menuStyles = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0px)" : "translateX(-100%)",
    config: { tension: 200, friction: 30 }, // 动画速度和阻力配置，增加平滑感
  });

  const menuMaskStyles = useSpring({
    opacity: visible ? 1 : 0,
    visibility: (visible ? "visible" : "hidden") as "visible" | "hidden",
    onStart: ({ value }) => {
      if (value.opacity < 0.1) {
        setVisible(true);
      }
    },
    onRest: ({ value }) => {
      if (value.opacity < 0.1) {
        setVisible(false);
      }
    },
  });

  return (
    <>
      <animated.div
        style={menuMaskStyles}
        onClick={() => setVisible(false)}
        fixed
        top-0
        left-0
        w="100%"
        h="100%"
        z-9
        className="bg-black:75"
      />
      <animated.div
        style={menuStyles}
        fixed
        top-0
        left-0
        w="65vw"
        h-screen
        z-10
        flex
        flex-col
        b-3px
      >
        <NavLink
          to="/sign_in"
          className="bg-[var(--welcome-bg-color)] w-full text-[var(--text-color)] pt-32px pb-44px px-16px grow-0 shrink-0"
        >
          <h2 text-24px>未登录用户</h2>
          <div className="text-[var(--text-color-light)]">点击这里登录</div>
        </NavLink>
        <ul grow-1 shrink-1 bg-white text-20px py-16px>
          {Items.map((item) => (
            <Li key={item.key}>
              <NavLink to={item.to} flex items-center py-8px mb-4px>
                <Icon name={item.icon} />
                {item.text}
              </NavLink>
            </Li>
          ))}
        </ul>
      </animated.div>
    </>
  );
};

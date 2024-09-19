import { animated, useTransition } from "@react-spring/web";
import React, { ReactNode, useRef, useState } from "react";
import { Link, useLocation, useOutlet } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export const WelcomeLayout: React.FC = () => {
  const linkMap: Record<string, string> = {
    '/welcome/1': '/welcome/2',
    '/welcome/2': '/welcome/3',
    '/welcome/3': '/welcome/4',
    '/welcome/4': '/welcome/xxx'
  }
  const map = useRef<Record<string, ReactNode>>({});
  const location = useLocation();
  map.current[location.pathname] = useOutlet();
  const [extraStyle, setExtraStyle] = useState<React.CSSProperties>({ position: 'relative' });
  console.log("local", location.pathname);
  const transitions = useTransition(location.pathname, {
    // 进入状态
    from: {
      transform:
        location.pathname === "/welcome/1/"
          ? "translateX(0%)"
          : "translateX(100%)",
    },
    // 稳定状态
    enter: { transform: "translateX(0%)" },
    // 退出状态
    leave: { transform: "translateX(-100%)", display: "none" },
    config: { duration: 300 },
    onStart: () => {
      setExtraStyle({ position: 'absolute' });
    },
    onRest: () => {
      setExtraStyle({ position: 'relative' });
    }
  });
  return (
    <div className="bg-#5f34bf" h-screen flex flex-col pb-12px>
      <header shrink-0 text-center>
        <img src={logo} alt="logo" w-64px />
        <h1 text="#D4D4De" text-32px>山竹记账</h1>
      </header>
      <main grow-1 shrink-1 relative>
        {transitions((style, pathname) => (
          <animated.div key={pathname} style={{ ...style, ...extraStyle }} w-full h-full p-16px flex>
            <div grow-1 bg-white rounded rounded-8px flex justify-center items-center>
              {map.current[pathname]}
            </div>
          </animated.div>
        ))}
      </main>
      <footer shrink-0 text-center text-24px  grid grid-cols-3 grid-rows-1>
        <Link text-white style={{ gridArea: '1 / 2 / 2 / 3' }} to={linkMap[location.pathname]}>下一页</Link>
        <Link text-white style={{ gridArea: '1 / 3 / 2 / 4' }} to="/welcome/xxx">跳过</Link>
      </footer>
    </div>
  );
};

import { animated, useTransition } from "@react-spring/web";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useOutlet } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useSwipe } from "../hooks/useSwipe";

export const WelcomeLayout: React.FC = () => {
  const nextLinkMap: Record<string, string> = {
    '/welcome/1': '/welcome/2',
    '/welcome/2': '/welcome/3',
    '/welcome/3': '/welcome/4',
    '/welcome/4': '/welcome/1'
  }
  const lastLinkMap: Record<string, string> = {
    '/welcome/1': '/welcome/4',
    '/welcome/2': '/welcome/1',
    '/welcome/3': '/welcome/2',
    '/welcome/4': '/welcome/3'
  }
  const map = useRef<Record<string, ReactNode>>({});
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [extraStyle, setExtraStyle] = useState<React.CSSProperties>({ position: 'relative' });
  const animating = useRef(false);
  const { direction } = useSwipe(mainRef);
  const transitions = useTransition(location.pathname, {
    // 进入状态
    from: {
      transform:
        location.pathname === "/welcome/1/"
          ? "translateX(0%)" : (direction === "right" || direction === "down") ? "translateX(-100%)" : "translateX(100%)",
    },
    // 稳定状态
    enter: { transform: "translateX(0%)" },
    // 退出状态
    leave: { transform: (direction === "right" || direction === "down") ? "translateX(100%)" : "translateX(-100%)" },
    config: { duration: 300 },
    onStart: () => {
      setExtraStyle({ position: 'absolute' });
    },
    onRest: () => {
      animating.current = false;
      setExtraStyle({ position: 'relative' });
    }
  });
  map.current[location.pathname] = useOutlet();


  console.log("direction", direction);

  useEffect(() => {
    if (direction === 'left' || direction === 'up') {
      if (animating.current) {return;}
      navigate(nextLinkMap[location.pathname]);
      animating.current = true;
    }
    if (direction === 'right' || direction === 'down') {
      if (animating.current) {return;}
      navigate(lastLinkMap[location.pathname]);
      animating.current = true;
    }
  }, [direction, location.pathname])

  return (
    <div className="bg-#FFF9E1" h-screen flex flex-col py-12px>
      <header shrink-0 text-center>
        <img src={logo} alt="logo" w-64px rotate-270/>
        <h1 text="#4A4A4A" text-32px>Yolk Accounting</h1>
      </header>
      <main grow-1 shrink-1 relative ref={mainRef}>
        {transitions((style, pathname) => (
            <animated.div key={pathname} style={{ ...style, ...extraStyle }} w-full h-full p-16px flex>
              <div grow-1 bg="#FFD580" rounded rounded-8px flex justify-center items-center>
                {map.current[pathname]}
              </div>
            </animated.div>
        ))}
      </main>
      <footer shrink-0 text-center text-24px  grid grid-cols-3 grid-rows-1>
        {/* <Link className="text-[var(--text-color-light)]" style={{ gridArea: '1 / 1 / 1 / 1' }} to={lastLinkMap[location.pathname]}>Last Page</Link> */}
        <Link className="text-[var(--text-color-light)]" style={{ gridArea: '1 / 2 / 2 / 3' }} to={nextLinkMap[location.pathname]}>Next Page</Link>
        <Link className="text-[var(--text-color-light)]" style={{ gridArea: '1 / 3 / 2 / 4' }} to="/welcome/xxx">Skip</Link>
      </footer>
    </div>
  );
};

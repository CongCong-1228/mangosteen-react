import { animated, useTransition } from "@react-spring/web"
import { ReactNode, useRef } from "react"
import { Outlet, useLocation, useOutlet } from "react-router-dom"


export const WelcomeLayout: React.FC = () => {
    const map = useRef<Record<string, ReactNode>>({})
    const location = useLocation()
    const outlet = useOutlet()
    map.current[location.pathname] = outlet
    const transitions = useTransition(location.pathname, {
        // 进入状态
        from: { transform: location.pathname === '/welcome/1/' ? 'translateX(0%)' : 'translateX(100%)', },
        // 稳定状态
        enter: { transform: 'translateX(0%)', },
        // 退出状态
        leave: { transform: 'translateX(-100%)', },
        config: { duration: 300 }

    })
    return transitions((style, pathname) =>
        <animated.div key={pathname} style={style}>
            <div style={{ textAlign: 'center' }}>
                {map.current[pathname]}
            </div>
        </animated.div>
    )
}



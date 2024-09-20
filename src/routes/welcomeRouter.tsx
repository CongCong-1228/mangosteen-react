import { RouteObject } from "react-router-dom";
import { Welcome1 } from "../pages/Welcome1";
import { Welcome2 } from "../pages/Welcome2";
import { Welcome3 } from "../pages/Welcome3";
import { Welcome4 } from "../pages/Welcome4";
import { Root } from "../components/Root";
import { NotFoundPage } from "../pages/NotFoundPage";

export const WelcomeRoutes: RouteObject[] = [
    {
        path: 'welcome',
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                element: <Welcome1 />,
                index: true,
            },
            {
                path: '2',
                element: <Welcome2 />,
            },
            {
                path: '3',
                element: <Welcome3 />,
            },
            {
                path: '4',
                element: <Welcome4 />,
            },
        ]
    }
]

import { createBrowserRouter } from "react-router-dom";
import { ErrorComponents } from "../components/ErrorComponents";
import { MainLayout } from "../layouts/MainLayout";
import { WelcomeRoutes } from "./welcomeRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorComponents />,
        children: WelcomeRoutes
    }
])

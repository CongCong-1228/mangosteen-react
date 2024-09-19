import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { WelcomeRoutes } from "./welcomeRouter";
import { RedirectToWelcome1 } from "../components/RedirectToWelcome1";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <RedirectToWelcome1 />,
        children: WelcomeRoutes
    }
])

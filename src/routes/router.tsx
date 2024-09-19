import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { WelcomeRoutes } from "./welcomeRouter";
import { NotFoundPage } from "../components/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: WelcomeRoutes
    }
])

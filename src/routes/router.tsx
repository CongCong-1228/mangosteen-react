import { createBrowserRouter } from "react-router-dom";
import { WelcomeLayout } from "@/layouts/WelcomeLayout";
import { Welcome1 } from "@/pages/Welcome1";
import { Welcome2 } from "@/pages/Welcome2";
import { Welcome3 } from "@/pages/Welcome3";
import { Welcome4 } from "@/pages/Welcome4";
import { Root } from "@/components/Root";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Home } from "@/pages/Home";
import { Items } from "@/pages/items/Items";
import SignInPage from "@/pages/SignInPage";
import { NewItem } from "@/pages/NewItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/home",
    element: <Home title="Home" />,
  },
  {
    path: "/welcome",
    element: <WelcomeLayout />,
    children: [
      {
        path: "1",
        element: <Welcome1 />,
      },
      {
        path: "2",
        element: <Welcome2 />,
      },
      {
        path: "3",
        element: <Welcome3 />,
      },
      {
        path: "4",
        element: <Welcome4 />,
      },
    ],
  },
  {
    path: "/items",
    element: <Items />,
  },
  {
    path: "/sign_in",
    element: <SignInPage />,
  },
  {
    path: "/chart",
    element: <div>Chart</div>,
  },
  {
    path: "/export",
    element: <div>export</div>,
  },
  {
    path: "/category",
    element: <div>category</div>,
  },
  {
    path: "/noty",
    element: <div>noty</div>,
  },
  {
    path: "/new_item",
    element: <NewItem />,
  },
]);

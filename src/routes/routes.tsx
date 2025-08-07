import App from "@/App";
import About from "@/pages/about/About";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import Verify from "@/pages/verify/Verify";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "about",
        Component: About,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/verify",
    Component: Verify,
  },
]);

export default router;

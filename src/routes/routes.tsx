import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";

import AddTour from "@/pages/admin/AddTour";
import Analytics from "@/pages/admin/Analytics";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Booking from "@/pages/user/Booking";
import Verify from "@/pages/Verify";

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
    path: "/admin",
    Component: DashboardLayout,
    children: [
      {
        path: "analytics",
        Component: Analytics,
      },
      {
        path: "add-tour",
        Component: AddTour,
      },
    ],
  },
  {
    path: "/user",
    Component: DashboardLayout,
    children: [
      {
        path: "bookings",
        Component: Booking,
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

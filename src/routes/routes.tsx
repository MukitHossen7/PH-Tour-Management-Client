import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/about/About";
import Analytics from "@/pages/analytics/Analytics";
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
    Component: AdminLayout,
    children: [
      {
        path: "analytics",
        Component: Analytics,
      },
    ],
  },
]);

export default router;

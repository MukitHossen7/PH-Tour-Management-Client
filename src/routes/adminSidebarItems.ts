import { lazy } from "react";
const Analytics = lazy(() => import("@/pages/admin/Analytics"));
const AddTour = lazy(() => import("@/pages/admin/AddTour"));
const AddDivision = lazy(() => import("@/pages/admin/AddDivision"));
const AddTourType = lazy(() => import("@/pages/admin/AddTourType"));

export const adminSidebarItems = [
  {
    title: "Dashboard",
    url: "#",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Tour Management",
    url: "#",
    items: [
      {
        title: "Add Tour",
        url: "/admin/add-tour",
        component: AddTour,
      },
      {
        title: "Add Tour Type",
        url: "/admin/add-tour-type",
        component: AddTourType,
      },
      {
        title: "Add Division",
        url: "/admin/division",
        component: AddDivision,
      },
    ],
  },
];

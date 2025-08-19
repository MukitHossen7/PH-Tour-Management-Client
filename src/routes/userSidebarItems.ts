import Booking from "@/pages/user/Booking";

export const userSidebarItems = [
  {
    title: "History",
    url: "#",
    items: [
      {
        title: "Booking",
        url: "/user/bookings",
        component: Booking,
      },
    ],
  },
];

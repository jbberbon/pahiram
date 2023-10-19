import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";

export const SidebarItems = {
  BORROWER: [
    {
      index: 0,
      title: "Dashboard",
      icon: <HandshakeRoundedIcon fontSize="large" />,
      link: "dashboard",
      aria: "Navigate to dashboard page",
    },
    {
      index: 1,
      title: "FAQ",
      icon: <AccessTimeRoundedIcon fontSize="large" />,
      link: "faq",
      aria: "Navigate to track equipment page",
    },
    {
      index: 2,
      title: "History",
      icon: <ListAltRoundedIcon fontSize="large" />,
      link: "history",
      aria: "Navigate to equipment borrowing history page",
    },
  ],
  EMPLOYEE: [
    {
      title: "LOREM IPSUM",
      icon: <HandshakeRoundedIcon fontSize="large" />,
      link: "/borrow-equipment",
      aria: "Navigate to borrow equipment page",
    },
    {
      title: "Track Equipment",
      icon: <AccessTimeRoundedIcon fontSize="large" />,
      link: "/track-equipment",
      aria: "Navigate to track equipment page",
    },
    {
      title: "History",
      icon: <ListAltRoundedIcon fontSize="large" />,
      link: "/history",
      aria: "Navigate to equipment borrowing history page",
    },
  ],
  SUPERVISOR: [],
  SYSTEM_ADMIN: [],
  null: [
    {
      title: "You've found an easter egg",
      icon: <ListAltRoundedIcon fontSize="large" />,
      link: "",
      aria: "Navigate to equipment borrowing history page",
    },
  ],
};

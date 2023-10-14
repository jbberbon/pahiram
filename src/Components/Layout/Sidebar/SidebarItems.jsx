import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";

export const SidebarItems = {
  Borrower: [
    {
      title: "Dashboard",
      icon: <HandshakeRoundedIcon fontSize="large" />,
      link: "dashboard",
      aria: "Navigate to dashboard page",
    },
    {
      title: "FAQ",
      icon: <AccessTimeRoundedIcon fontSize="large" />,
      link: "faq",
      aria: "Navigate to track equipment page",
    },
    {
      title: "History",
      icon: <ListAltRoundedIcon fontSize="large" />,
      link: "/history",
      aria: "Navigate to equipment borrowing history page",
    },
  ],
  Employee: [
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
  OfficeAdmin: [],
  SuperAdmin: [],
};

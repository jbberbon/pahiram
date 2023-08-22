import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";

export const SidebarItems = {
  Borrower: [
    {
      title: "Borrow Equipment",
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

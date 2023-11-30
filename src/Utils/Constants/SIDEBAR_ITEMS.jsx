import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import GridViewIcon from "@mui/icons-material/GridView";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import USER_ROLES from "./USER_ROLES";

const borrower = USER_ROLES.borrower;
const inventoryManager = USER_ROLES.inventoryManager;
const borrowingManager = USER_ROLES.lendingManager;
const supervisor = USER_ROLES.supervisor;
const admin = USER_ROLES.admin;

const SIDEBAR_ITEMS = {
  [borrower]: [
    {
      title: "Borrow Items",
      icon: <HandshakeRoundedIcon fontSize="large" />,
      link: "borrow-items",
      aria: "Navigate to dashboard page",
    },
    {
      title: "On-going Transaction",
      icon: <ListAltRoundedIcon fontSize="large" />,
      link: "ongoing-transactions",
      aria: "Navigate to equipment borrowing history page",
    },
    {
      title: "Borrowing History",
      icon: <HistoryRoundedIcon fontSize="large" />,
      link: "borrowing-history",
      aria: "Navigate to equipment borrowing history page",
    },
    {
      title: "Penalty Records",
      icon: <SentimentDissatisfiedOutlinedIcon fontSize="large" />,
      link: "penalties",
      aria: "Navigate to penalty records page",
    },
  ],
  [inventoryManager]: [
    {
      title: "Dashboard",
      icon: <GridViewIcon fontSize="large" />,
      link: "dashboard",
      aria: "Navigate to dashboard page",
    },
    {
      title: "FAQ",
      icon: <AccessTimeRoundedIcon fontSize="large" />,
      link: "faqs",
      aria: "Navigate to track equipment page",
    },
  ],
  [borrowingManager]: [],
  [supervisor]: [],
  [admin]: [],
  null: [
    {
      title: "You've found an easter egg",
      icon: <ListAltRoundedIcon fontSize="large" />,
      link: "",
      aria: "Navigate to equipment borrowing history page",
    },
  ],
};

export default SIDEBAR_ITEMS;

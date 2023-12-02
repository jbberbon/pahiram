import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';


const SIDEBAR_ITEMS = {
  "borrower": [
    {
      title: "Borrow Items",
      icon: <HandshakeRoundedIcon fontSize="large" />,
      link: "borrow-items",
      aria: "Navigate to dashboard page",
    },
    {
      title: "Borrowing Status",
      icon: <ListAltRoundedIcon fontSize="large" />,
      link: "ongoing-transactions",
      aria: "Navigate to borrowing status page",
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
  "employee": [
    {
      title: "Dashboard",
      icon: <DashboardCustomizeRoundedIcon fontSize="large" />,
      link: "dashboard",
      aria: "Navigate to dashboard page",
    },
    {
      title: "Manage Transactions",
      icon: <ReceiptLongRoundedIcon fontSize="large" />,
      link: "manage-transactions",
      aria: "Navigate to manage transactions page",
    },
    {
      title: "Manage Inventory",
      icon: <InventoryRoundedIcon fontSize="large" />,
      link: "manage-inventory",
      aria: "Navigate to manage inventory page",
    },
    {
      title: "Lending History",
      icon: <HistoryEduRoundedIcon fontSize="large" />,
      link: "lending-history",
      aria: "Navigate to lending history page",
    },
  ],
  "supervisor": [
    {
      title: "Dashboard",
      icon: <DashboardCustomizeRoundedIcon fontSize="large" />,
      link: "dashboard",
      aria: "Navigate to dashboard page",
    },
    {
      title: "Manage Transactions",
      icon: <ReceiptLongRoundedIcon fontSize="large" />,
      link: "manage-transactions",
      aria: "Navigate to manage transactions page",
    },
    {
      title: "Manage Inventory",
      icon: <InventoryRoundedIcon fontSize="large" />,
      link: "manage-inventory",
      aria: "Navigate to manage inventory page",
    },
    {
      title: "Lending History",
      icon: <HistoryEduRoundedIcon fontSize="large" />,
      link: "lending-history",
      aria: "Navigate to lending history page",
    },
    {
      title: "Manage Accounts",
      icon: <ManageAccountsOutlinedIcon fontSize="large" />,
      link: "lending-history",
      aria: "Navigate to lending history page",
    },
  ],
  "null": [
    {
      title: "You've found an easter egg",
      icon: <SelfImprovementOutlinedIcon fontSize="large" />,
      link: "",
      aria: "Navigate to equipment borrowing history page",
    },
  ]
};

export default SIDEBAR_ITEMS;






// import USER_ROLES from "./USER_ROLES";
// const borrower = USER_ROLES.borrower;
// const inventoryManager = USER_ROLES.inventoryManager;
// const borrowingManager = USER_ROLES.lendingManager;
// const supervisor = USER_ROLES.supervisor;
// const admin = USER_ROLES.admin;

// const SIDEBAR_ITEMS2 = {
//   [borrower]: [
//     {
//       title: "Borrow Items",
//       icon: <HandshakeRoundedIcon fontSize="large" />,
//       link: "borrow-items",
//       aria: "Navigate to dashboard page",
//     },
//     {
//       title: "Borrowing Status",
//       icon: <ListAltRoundedIcon fontSize="large" />,
//       link: "ongoing-transactions",
//       aria: "Navigate to equipment borrowing history page",
//     },
//     {
//       title: "Borrowing History",
//       icon: <HistoryRoundedIcon fontSize="large" />,
//       link: "borrowing-history",
//       aria: "Navigate to equipment borrowing history page",
//     },
//     {
//       title: "Penalty Records",
//       icon: <SentimentDissatisfiedOutlinedIcon fontSize="large" />,
//       link: "penalties",
//       aria: "Navigate to penalty records page",
//     },
//   ],
//   [inventoryManager]: [
//     {
//       title: "Dashboard",
//       icon: <GridViewIcon fontSize="large" />,
//       link: "dashboard",
//       aria: "Navigate to dashboard page",
//     },
//     {
//       title: "FAQ",
//       icon: <AccessTimeRoundedIcon fontSize="large" />,
//       link: "faqs",
//       aria: "Navigate to track equipment page",
//     },
//   ],
//   [borrowingManager]: [],
//   [supervisor]: [],
//   [admin]: [],
//   null: [
//     {
//       title: "You've found an easter egg",
//       icon: <ListAltRoundedIcon fontSize="large" />,
//       link: "",
//       aria: "Navigate to equipment borrowing history page",
//     },
//   ],
// };

// export default SIDEBAR_ITEMS;

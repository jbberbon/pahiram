import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";

const EMPLOYEE_MENU_LIST = [
  {
    title: "Lending Dashboard",
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
    title: "Borrowing History",
    icon: <HistoryEduRoundedIcon fontSize="large" />,
    link: "borrowing-history",
    aria: "Navigate to lending history page",
  },
  {
    title: "Manage Inventory",
    icon: <InventoryRoundedIcon fontSize="large" />,
    link: "manage-office-inventory",
    aria: "Navigate to manage inventory page",
  },
  {
    title: "Manage Penalties",
    icon: <GppMaybeOutlinedIcon fontSize="large" />,
    link: "manage-penalty",
    aria: "Navigate to manage penalty page",
  },
];

export default EMPLOYEE_MENU_LIST;

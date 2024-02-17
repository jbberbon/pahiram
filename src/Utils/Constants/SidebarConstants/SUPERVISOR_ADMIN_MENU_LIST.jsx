import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';


const SUPERVISOR_ADMIN_MENU_LIST = [
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
    title: "Borrowing History",
    icon: <HistoryEduRoundedIcon fontSize="large" />,
    link: "borrowing-history",
    aria: "Navigate to lending history page",
  },
  {
    title: "Manage Inventory",
    icon: <InventoryRoundedIcon fontSize="large" />,
    link: "manage-inventory",
    aria: "Navigate to manage inventory page",
  },
  {
    title: "Manage Penalties",
    icon: <GppMaybeOutlinedIcon fontSize="large" />,
    link: "manage-penalty",
    aria: "Navigate to manage penalty page",
  },
  {
    title: "Manage Accounts",
    icon: <ManageAccountsOutlinedIcon fontSize="large" />,
    link: "manage-accounts",
    aria: "Navigate to lending history page",
  },
];

export default SUPERVISOR_ADMIN_MENU_LIST;

import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
// import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";

const ALL_MENU_LIST = [
  {
    title: "Borrow Items",
    icon: <HandshakeRoundedIcon fontSize="large" />,
    link: "borrow-items",
    aria: "Navigate to dashboard page",
  },
  {
    title: "Borrow Requests",
    icon: <HistoryRoundedIcon fontSize="large" />,
    link: "borrow-requests",
    aria: "Navigate to equipment borrowing history page",
  },
  {
    title: "Penalty Records",
    icon: <SentimentDissatisfiedOutlinedIcon fontSize="large" />,
    link: "penalties",
    aria: "Navigate to penalty records page",
  },
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
  {
    title: "Manage Endorsements",
    icon: <></>,
    link: "manage-endorsements",
    aria: "navigate to manage endorsement page",
  },
  {
    link: "penalty-clearance",
  },
];

export default ALL_MENU_LIST;

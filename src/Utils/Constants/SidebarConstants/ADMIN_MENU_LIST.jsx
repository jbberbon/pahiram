import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

const ADMIN_MENU_LIST = [
  {
    title: "Admin Dashboard",
    icon: <DashboardCustomizeRoundedIcon fontSize="large" />,
    link: "admin-dashboard",
    aria: "Navigate to admin dashboard page",
  },
  {
    title: "Manage Accounts",
    icon: <ManageAccountsOutlinedIcon fontSize="large" />,
    link: "admin-account-management",
    aria: "Navigate to manage transactions page",
  },
];

export default ADMIN_MENU_LIST;

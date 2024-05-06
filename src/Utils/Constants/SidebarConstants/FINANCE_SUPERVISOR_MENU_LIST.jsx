import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

const FINANCE_SUPERVISOR_MENU_LIST = [
  {
    title: "Penalty Clearance",
    icon: <AccountBalanceRoundedIcon fontSize="large" />,
    link: "penalty-clearance",
    aria: "Navigate to penalty clearance page",
  },
  {
    title: "Manage Office Accounts",
    icon: <ManageAccountsOutlinedIcon fontSize="large" />,
    link: "manage-office-account",
    aria: "Navigate to office account management page",
  },
];

export default FINANCE_SUPERVISOR_MENU_LIST;

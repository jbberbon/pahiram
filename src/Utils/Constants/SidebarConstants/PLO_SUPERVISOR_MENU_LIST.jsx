import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";

const PLO_SUPERVISOR_MENU_LIST = [
  {
    title: "Manage Inventory",
    icon: <InventoryRoundedIcon fontSize="large" />,
    link: "manage-inventory",
    aria: "Navigate to penalty clearance page",
  },
  {
    title: "Manage Office Accounts",
    icon: <ManageAccountsOutlinedIcon fontSize="large" />,
    link: "manage-office-account",
    aria: "Navigate to office account management page",
  },
];

export default PLO_SUPERVISOR_MENU_LIST;

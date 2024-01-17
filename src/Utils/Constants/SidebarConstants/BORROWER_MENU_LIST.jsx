import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
// import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";

const BORROWER_MENU_LIST = [
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
];

export default BORROWER_MENU_LIST;

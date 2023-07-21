import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";

const BorrowerItems = [
  {
    title: "Borrow Equipment",
    icon: <HandshakeRoundedIcon fontSize="large" />,
    link: "/borrow-equipment",
  },
  {
    title: "Track Equipment",
    icon: <AccessTimeRoundedIcon fontSize="large" />,
    link: "/track-equipment",
  },
  {
    title: "History",
    icon: <ListAltRoundedIcon fontSize="large" />,
    link: "/history",
  },
];


function BorrowerSidebarItems() {
  const theme = useTheme();
  const mainTextColor = theme.palette.neutral.main;

  return (
    <List>
      {BorrowerItems.map((val, key) => (
        <ListItem
          key={key}
          sx={{
            display: "block",
            paddingTop: "8px",
            paddingRight: "8px",
            paddingBottom: 0,
            paddingLeft: "8px",
          }}
        >
          <ListItemButton
            disableGutters={false}
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              height: 48,
              borderRadius: "8px",
            }}
          >
            <ListItemIcon
              sx={{
                paddingRight: "16px",
                color: mainTextColor
              }}
            >
              {val.icon}
            </ListItemIcon>
            <ListItemText>
              <Typography
                color={mainTextColor}
                noWrap={true}
                variant="h6"
                component={"h2"}
              >
                {val.title}
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default BorrowerSidebarItems;

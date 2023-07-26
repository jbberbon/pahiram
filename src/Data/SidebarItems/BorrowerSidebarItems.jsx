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
  // const yellowHover = theme.palette.secondary.main.replace("1)", "0.1)");

  return (
    <List>
      {BorrowerItems.map((val, key) => (
        <ListItem
          key={key}
          sx={{
            display: "block",
            paddingTop: "4px",
            paddingRight: "8px",
            paddingBottom: "4px",
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
              // "&:hover, &.Mui-focusVisible": { backgroundColor: yellowHover }
            }}
            aria-label={val.title}
            role="button"
          >
            <ListItemIcon
              sx={{
                minWidth: "48px",
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

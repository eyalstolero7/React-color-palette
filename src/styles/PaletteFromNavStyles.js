import {DRAWER_WIDTH} from "../constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  navBtns: {
    marginRight: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
    },
  },
  button: {
    margin: "0.5rem",
    [sizes.down("sm")]: {
      fontSize: "0.6rem",
    },
  },
  title: {
    [sizes.down("sm")]: {
      fontSize: "1rem",
    },
  },
});

export default styles;
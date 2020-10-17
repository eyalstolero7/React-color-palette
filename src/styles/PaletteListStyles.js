import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  "@global": {
    ".fade-exit": {
      opacity: "1.0",
    },
    ".fade-exit-active": {
      opacity: "0.0",
      transition: "0.5s ease-out !important",
    },
  },
  root: {
    /* background by SVGBackgrounds.com */
    backgroundColor: "#00b7ff",
    backgroundImage: `url(${bg})`,
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflowY: "auto",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flexStart",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("lg")]: {
      width: "80%",
    },
    [sizes.down("md")]: {
      width: "90%",
    },
    [sizes.down("sm")]: {
      width: "95%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white",
    },
    "& h1": {
      [sizes.down("xs")]: {
        fontSize: "1.8 rem",
      },
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "2rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)",
      gridGap: "0.7rem",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1,100%)",
      paddingBottom: "1rem",
    },
  },
};

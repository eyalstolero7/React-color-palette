import sizes from "./sizes";

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
    backgroundColor: "white",
  },

  logo: {
    marginRight: "15px",
    height: "100%",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: " #eceff1",
    fontFamily: "'Roboto', sans-serif",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },

  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-3px",
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    [sizes.down("sm")]: {
      width: "150px",
    },
  },

  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};

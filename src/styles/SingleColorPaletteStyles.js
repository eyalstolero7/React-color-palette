import sizes from "./sizes";

export default {
  SinglePalette: {
    height: "100vh",
    overflow: "hidden",
  },

  PaletteColors: {
    height: "90%",
  },

  backButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    fontSize: "1rem",
    lineHeight: "1.7",
    color: "white",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },

  ColorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    backgroundColor: "black",
    marginBottom: "-4.5px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.showingFullPalette ? "20%" : "33%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.showingFullPalette ? "10%" : "20%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => (props.showingFullPalette ? "5.3%" : "10%"),
    },
  },
};
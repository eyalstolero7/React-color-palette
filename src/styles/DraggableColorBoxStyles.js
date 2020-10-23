import sizes from "./sizes";
import chroma from "chroma-js";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5.5px",
    "&:hover svg": {
      color: (props) =>
        chroma(props.color).luminance() <= 0.08
          ? "rgba(255,255,255,1)"
          : "rgba(0,0,0,1)",
      transform: "scale(1.4)",
      transition: "all 0.3s ease-in-out",
    },
    "&:not(hover) svg": {
      transform: "scale(1)",
      transition: "all 0.1s ease-in-out",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(255,255,255,0.4)"
        : "rgba(0,0,0,0.7)",
    position: "absolute",
    padding: "10px",
    width: "calc(100% - 10px)",
    left: "0px",
    bottom: "0px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
  },
  deleteIcon: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(255,255,255,0.6)"
        : "rgba(0,0,0,0.8)",
  },
};

export default styles;
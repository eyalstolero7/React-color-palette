import sizes from "./sizes";

export default {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.2rem",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.1s ease-in-out",
      [sizes.down("sm")]: {
        transform: "scale(1)",
      },
    },
    "&:hover svg": {
      opacity: "1",
      transform: "scale(1.2)",
      transition: "transform 0.1s ease-in-out",
      [sizes.down("sm")]: {
        transform: "scale(1)",
      },
    },
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    margin: "0.2rem auto",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4.5px",
  },
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    width: "15px",
    height: "15px",
    position: "absolute",
    right: "0",
    top: "0",
    padding: "5px",
    zIndex: "10",
    opacity: "0",
    transition: "opacity 0.3s ease-in-out",
  },
};

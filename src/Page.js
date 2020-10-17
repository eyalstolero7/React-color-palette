import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  "@global": {
    ".page-left-enter": {
      transform: "translateX(100%)",
    },
    ".page-left-enter-active": {
      transform: "translateX(0)",
      transition: "0.3s ease-out !important",
    },
    ".page-left-exit-active": {
      transform: "translateX(-100%)",
      transition: "0.3s ease-out !important",
    },
    ".page-right-enter": {
      transform: "translateX(-100%)",
    },
    ".page-right-enter-active": {
      transform: "translateX(0)",
      transition: "0.3s ease-out !important",
    },
    ".page-right-exit-active": {
      transform: "translateX(100%)",
      transition: "0.3s ease-out !important",
    },
  },
  page: {
    height: "inherent",
    width: "inherent",
  },
};

class Page extends Component {
  render() {
    return (
      <section className={`${this.props.classes.page} page-left`}>{this.props.children}</section>
    );
  }
}

export default withStyles(styles)(Page);

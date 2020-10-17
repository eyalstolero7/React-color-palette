import React, { Component } from "react";
import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";

import Button from "@material-ui/core/Button";

import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteFromNavStyles";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = { formShowing: false };
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  showForm() {
    this.setState({ formShowing: true });
  }

  closeForm() {
    this.setState({ formShowing: false });
  }

  render() {
    const {
      classes,
      open,
      handleDrawerOpen,
      handleSubmit,
      palettes,
    } = this.props;
    const { formShowing } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, { [classes.hide]: open })}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Button
              className={classes.button}
              color="primary"
              onClick={this.showForm}
            >
              Open form dialog
            </Button>
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm
            handleSubmit={handleSubmit}
            palettes={palettes}
            closeForm={this.closeForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);

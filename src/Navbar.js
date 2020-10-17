import React, { Component } from "react";
import { Link } from "react-router-dom";

import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconBotton from "@material-ui/core/IconButton";
import "rc-slider/assets/index.css";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true }, () =>
      this.props.handleChange(this.state.format)
    );
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { format, open } = this.state;
    const { level, changeLevel, isSingleColor, classes } = this.props;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {isSingleColor || (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed To {format}</span>}
          ContentProps={{ "area-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconBotton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon></CloseIcon>
            </IconBotton>,
          ]}
        ></Snackbar>
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);

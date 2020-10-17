import React, { Component } from "react";
import CopyToClipBoard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ColorBoxStyles";
import clsx from "clsx";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {
      name,
      background,
      moreUrl,
      showingFullPalette,
      classes,
    } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipBoard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background: background }}>
          <div
            className={clsx(classes.copyOverlay, {
              [classes.showOverlay]: copied,
            })}
            style={{ background: background }}
          />
          <div
            className={clsx(classes.copyMessage, {
              [classes.showMessage]: copied,
            })}
          >
            <h1>Copied!</h1>
            <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div></div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipBoard>
    );
  }
}

export default withStyles(styles)(ColorBox);

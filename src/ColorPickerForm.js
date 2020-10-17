import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorPickerFormStyles.js";
import chroma from "chroma-js";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "teal", newColorName: "" };
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return this.props.colors.every(
        ({ color }) => color !== this.state.currentColor
      );
    });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  decimalToHex(alpha) {
    return alpha === 0 ? "00" : Math.round(255 * alpha).toString(16);
  }

  handleColorChange(color) {
    this.setState({
      currentColor: `${color.hex}${this.decimalToHex(color.rgb.a)}`,
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    const fontColor =
      chroma(currentColor).luminance() <= 0.08 && !paletteIsFull
        ? "#fffff1"
        : "#00000f";
    return (
      <div className={classes.root}>
        <ChromePicker
          color={currentColor}
          onChange={this.handleColorChange}
          disableAlpha={false}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <TextValidator
            className={classes.colorNameInput}
            value={newColorName}
            name="newColorName"
            variant="filled"
            margin="normal"
            placeholder="Color Name"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "this field is required",
              "Color name must be unique",
              "Color already used",
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentColor,
              color: fontColor,
            }}
            disabled={paletteIsFull}
            className={classes.addColor}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);

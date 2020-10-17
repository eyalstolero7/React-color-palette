import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newPaletteName: "", stage: "form" };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule(
      "isPaletteNotNew",
      (value) => value.toLowerCase() !== "new"
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }

  savePalette(emoji) {
    this.props.handleSubmit(this.state.newPaletteName, emoji.native);
    this.setState({ stage: "" });
  }

  render() {
    const { newPaletteName, stage } = this.state;
    const { closeForm } = this.props;
    return (
      <div>
        <Dialog open={stage === "emoji"} onClose={closeForm}>
          <DialogTitle id="form-dialog-title">Pick an Emoji</DialogTitle>
          <DialogContent>
            <Picker onSelect={this.savePalette} title="Pick a Palette Emoji" />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeForm} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={stage === "form"}
          onClose={closeForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautifuy palette. Make sure
                it's unique!
              </DialogContentText>
              <TextValidator
                name="newPaletteName"
                value={newPaletteName}
                label="Palette Name"
                fullWidth
                margin="normal"
                onChange={this.handleChange}
                validators={[
                  "required",
                  "isPaletteNameUnique",
                  "isPaletteNotNew",
                ]}
                errorMessages={[
                  "Enter palette name",
                  "Name already used",
                  "Please choose a different name",
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={closeForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;

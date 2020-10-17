import React, { Component } from "react";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./helpers/seedColors";
import generatePalette from "./helpers/colorHelpers";
import { Route, Switch, Redirect } from "react-router-dom";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find((p) => {
      return p.id === id;
    });
  }

  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }

  deletePalette(paletteId) {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== paletteId),
      }),
      this.syncLocalStorage
    );
  }

  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                classNames="page-left"
                timeout={500}
                key={location.key}
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={(routeProps) => (
                      <Page>
                        <PaletteList
                          palettes={this.state.palettes}
                          {...routeProps}
                          deletePalette={this.deletePalette}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/new"
                    render={(routeProps) => (
                      <Page>
                        <NewPaletteForm
                          {...routeProps}
                          savePalette={this.savePalette}
                          palettes={this.state.palettes}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={(routeProps) => (
                      <Page>
                        <Palette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.id)
                          )}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={(routeProps) => (
                      <Page>
                        <SingleColorPalette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.paletteId)
                          )}
                          colorId={routeProps.match.params.colorId}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    render={() => (
                      <Redirect to="/"/> 
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;

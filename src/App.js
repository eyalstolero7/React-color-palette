import React, { Component } from "react";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./helpers/seedColors";
import generatePalette from "./helpers/colorHelpers";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors,
      prevDepth: this.getPathDepth(this.props.location),
      goHome: false,
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.getPageClassName = this.getPageClassName.bind(this);
    this.gotoHome = this.gotoHome.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter((n) => n !== "");
    return pathArr.length;
  }

  gotoHome(callback) {
    this.setState({ goHome: true }, () => {
      callback();
      setTimeout(() => this.setState({ goHome: false }), 800);
    });
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

  getPageClassName(location) {
    const delta = this.getPathDepth(location) - this.state.prevDepth;
    if (delta !== 0) {
      return delta > 0 ? "left" : "right";
    }
    return location.pathname === "/" ||
      (location.pathname !== "/palette/new" &&
        this.getPathDepth(location) === 2 &&
        !this.state.goHome)
      ? "left"
      : "right";
  }

  render() {
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                timeout={800}
                key={location.key}
                classNames="pageSlider"
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={(routeProps) => (
                      <Page pageClass={this.getPageClassName(location)}>
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
                      <Page pageClass={this.getPageClassName(location)}>
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
                      <Page pageClass={this.getPageClassName(location)}>
                        <Palette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.id)
                          )}
                          gotoHome={this.gotoHome}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={(routeProps) => (
                      <Page pageClass={this.getPageClassName(location)}>
                        <SingleColorPalette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.paletteId)
                          )}
                          colorId={routeProps.match.params.colorId}
                          gotoHome={this.gotoHome}
                        />
                      </Page>
                    )}
                  />
                  <Route render={() => <Redirect to="/" />} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);

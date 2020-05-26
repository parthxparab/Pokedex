import React from "react";
import logo from "./img/pokemon.png";
import "./App.css";
import BerryList from "./components/BerryList";
import Berry from "./components/Berry";
import PokemonList from "./components/PokemonList";
import Pokemon from "./components/Pokemon";
import MachineList from "./components/MachineList";
import Machine from "./components/Machine";
import NoMatch from "./components/NoMatch";
import HomePage from "./components/HomePage";

import { withRouter } from "react-router";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            {/* <a href="/"> */}
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              style={{ marginTop: "-12px", marginBottom: "5px" }}
            />
            {/* </a> */}
          </Link>
          <h1
            className="App-title"
            style={{ textShadow: "2px 2px #000000", paddingBottom: "5px" }}
          >
            Welcome to the Pokédex by Parth powered by pokeapi.co
          </h1>
          <Link
            to="/pokemon/page/0"
            /* <a */
            className="showlink"
            /* href="/pokemon/page/0" */
            style={{ marginRight: "10px" }}
          >
            Pokémon
            {/* </a> */}
          </Link>
          <Link
            to="/berry/page/0"
            /* <a */
            className="showlink"
            // href="/berry/page/0"
            style={{ marginRight: "10px" }}
          >
            Berry
            {/* </a> */}
          </Link>
          <Link
            to="/machine/page/0"
            /*<a*/ className="showlink" /*href="/machine/page/0"*/
          >
            Machine
            {/* </a> */}
          </Link>
        </header>

        <br />
        <br />
        <div className="App-body">
          {/* <p>Welcome to the TV Maze API example</p> */}
          <Switch>
            <Route path="/berry/page/:id" component={withRouter(BerryList)} />
            <Route path="/berry/:id" component={withRouter(Berry)} />
            <Route
              path="/machine/page/:id"
              component={withRouter(MachineList)}
            />
            <Route path="/machine/:id" component={withRouter(Machine)} />
            <Route
              path="/pokemon/page/:id"
              component={withRouter(PokemonList)}
            />
            <Route path="/pokemon/:id" component={withRouter(Pokemon)} />
            <Route exact path="/" component={withRouter(HomePage)} />
            <Route path="*" component={NoMatch} status={404} />
          </Switch>
        </div>
        <footer
          className="App-footer"
          style={{ color: "white", marginTop: "5px" }}
        >
          <div className="copyright">
            <p>2020 © All rights reserved | Parth Parab</p>{" "}
          </div>{" "}
        </footer>
      </div>
    </Router>
  );
};

export default App;

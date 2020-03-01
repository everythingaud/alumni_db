import React, { Component } from "react";
import ListTest from './ListTest.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import { ProfileCard } from "./components/profileCard.js"
import { Login } from './pages/sign_in.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
        <ListTest />
      </div>
    );
  }
}

export default App;

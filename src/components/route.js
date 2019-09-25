import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home/home";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

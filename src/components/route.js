import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home/home";
import ShoppingCart from "../components/shoppingCart/shoppingCart";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/shopping-cart" component={ShoppingCart} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

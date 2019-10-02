import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home/home";
import ShoppingCart from "../components/shoppingCart/shoppingCart";
import CheckOut from "../components/checkout/checkout";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/shopping-cart" component={ShoppingCart} />
          <Route exact path="/check-out" component={CheckOut} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

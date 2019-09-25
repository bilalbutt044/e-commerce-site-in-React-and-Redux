import React, { Component } from "react";
import "./home.css";
import Product from "../Product/product";
import ProductCategories from "../productCategories/productCategories";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ProductCategories />
        <Product />
      </div>
    );
  }
}

export default Home;

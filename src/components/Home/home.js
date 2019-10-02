import React, { Component } from "react";
import "./home.css";
import Product from "../Product/product";
import ProductCategories from "../productCategories/productCategories";
import NavBar from "../navbar/navbar";
class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <ProductCategories />
            </div>
            <div className="col-md-9 col-sm-12">
              <Product />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

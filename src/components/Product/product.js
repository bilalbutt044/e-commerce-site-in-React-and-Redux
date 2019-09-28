import React, { Component } from "react";
import "./products.css";

import { fetchProducts } from "../../action/productActions";
import { connect } from "react-redux";

import ProductCard from "../productCard/productCard";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products } = this.props;
    return (
      <div className="row sticky-top">
        {products &&
          Object.keys(products).map((key, index) => (
            <div className="col-md-6" key={index}>
              <ProductCard products={products[key]} index={index} id={key} />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.productsList
  };
};
export default connect(
  mapStateToProps,
  { fetchProducts }
)(Product);

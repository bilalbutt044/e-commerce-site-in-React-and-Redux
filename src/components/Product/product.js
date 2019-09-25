import React, { Component } from "react";
import { fetchProducts } from "../../action/productActions";
import { connect } from "react-redux";
import "./products.css";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchProducts();
  }
  render() {
    return <div>Product</div>;
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

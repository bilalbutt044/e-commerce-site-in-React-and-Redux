import React, { Component } from "react";
import "./productCategory.css";

import { fetchCategories } from "../../action/productActions";
import { connect } from "react-redux";

class ProductCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchCategories();
  }
  render() {
    return <div>categories</div>;
  }
}

const mapStateToProps = state => {
  return {
    categories: state.product.productCategories
  };
};

export default connect(
  mapStateToProps,
  { fetchCategories }
)(ProductCategories);

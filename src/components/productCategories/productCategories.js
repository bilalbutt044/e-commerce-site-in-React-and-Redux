import React, { Component } from "react";
import "./productCategory.css";
import PropTypes from "prop-types";

import { fetchCategories } from "../../action/productActions";
import { connect } from "react-redux";

class ProductCategories extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }
  render() {
    const { isloading, categories } = this.props;

    return (
      <div>
        {isloading && categories && <p>Loading...</p>}

        {categories &&
          Object.keys(categories).map((key, index) => (
            <p key={index}>{categories[key].name}</p>
          ))}
      </div>
    );
  }
}

ProductCategories.prototypes = {
  categories: PropTypes.array.isRequired,
  isloading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  categories: state.product.productCategories,
  isloading: state.product.isloading
});

export default connect(
  mapStateToProps,
  { fetchCategories }
)(ProductCategories);

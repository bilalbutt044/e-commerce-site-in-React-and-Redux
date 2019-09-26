import React, { Component } from "react";
import "./productCategory.css";

import { Nav, NavLink } from "reactstrap";

import PropTypes from "prop-types";
import { fetchCategories } from "../../action/productActions";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
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
        <div className="sticky-top">
          <Nav vertical className="list-group">
            <NavLink
              tag={Link}
              to="/"
              className="list-group-item list-group-item-action"
            >
              All categories
            </NavLink>
            {categories &&
              Object.keys(categories).map((key, index) => (
                <NavLink
                  className="list-group-item list-group-item-action"
                  key={index}
                  tag={Link}
                  to="/"
                >
                  {categories[key].name}
                </NavLink>
              ))}
          </Nav>
        </div>
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

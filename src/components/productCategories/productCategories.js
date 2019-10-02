import React, { Component } from "react";
import "./productCategory.css";

import { Nav, NavLink } from "reactstrap";

import PropTypes from "prop-types";
import { fetchCategories } from "../../action/productActions";
import { connect } from "react-redux";

import { Link, withRouter } from "react-router-dom";
import { Spinner } from "reactstrap";
import queryString from "query-string";

class ProductCategories extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }
  render() {
    const { isloading, categories } = this.props;
    const { search } = this.props.location;
    const { category } = queryString.parse(search);

    return (
      <div>
        {isloading ? (
          <Spinner
            color="secondary"
            style={{ position: "relative", top: "161px", left: "100px" }}
          />
        ) : (
          <div className="sticky-top">
            <Nav vertical className="list-group">
              <NavLink
                tag={Link}
                to="/"
                className={
                  category === undefined
                    ? "list-group-item list-group-item-action active"
                    : "list-group-item list-group-item-action"
                }
              >
                All categories
              </NavLink>
              {categories &&
                Object.keys(categories).map((key, index) => (
                  <NavLink
                    className={
                      category === key
                        ? "list-group-item list-group-item-action active"
                        : "list-group-item list-group-item-action"
                    }
                    key={index}
                    tag={Link}
                    to={{ search: `?category=${key}` }}
                  >
                    {categories[key].name}
                  </NavLink>
                ))}
            </Nav>
          </div>
        )}
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

export default withRouter(
  connect(
    mapStateToProps,
    { fetchCategories }
  )(ProductCategories)
);

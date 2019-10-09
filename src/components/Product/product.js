import React, { Component } from "react";
import "./products.css";
import { withRouter } from "react-router-dom";

import { fetchProducts } from "../../action/productActions";
import { connect } from "react-redux";
import ProductCard from "../productCard/productCard";
import queryString from "query-string";
import { Spinner } from "reactstrap";
import { addToCart, removeFromCart } from "../../action/cartAction";

class Product extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  addToCart = (id, product) => {
    const item = {
      ...product,
      quantity: 1,
      id: id
    };
    this.props.addToCart(this.props.item, item);
  };

  removeFromCart = id => {
    const product = {
      ...this.props.product,
      quantity: 1,
      id: id
    };
    this.props.removeFromCart(this.props.item, product);
  };

  render() {
    const search = this.props.location.search;
    const { category } = queryString.parse(search);
    let { products } = this.props;

    return (
      <div className="row sticky-top">
        {this.props.isloading ? (
          <Spinner
            color="secondary"
            style={{ position: "relative", top: "80px", left: "400px" }}
          />
        ) : products && category === undefined ? (
          Object.keys(products).map((key, index) => (
            <div className="col-md-6" key={index}>
              <ProductCard
                products={products[key]}
                index={index}
                id={key}
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
                item={this.props.item}
              />
            </div>
          ))
        ) : (
          Object.keys(products).map((key, index) => {
            console.log(products[key].category, category);
            if (products[key].category === category) {
              return (
                <div className="col-md-6" key={index}>
                  <ProductCard
                    products={products[key]}
                    index={index}
                    id={key}
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart}
                    item={this.props.item}
                  />
                </div>
              );
            } else return null;
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.productsList,
    isloading: state.product.isloading,
    item: state.cart.items
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { fetchProducts, addToCart, removeFromCart }
  )(Product)
);

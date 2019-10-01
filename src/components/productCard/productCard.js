import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./productCard.css";

import { addToCart } from "../../action/cartAction";
import { connect } from "react-redux";
import ProductQuantity from "../productQuantity/productQuantity";
class ProductCard extends Component {
  addToCart = () => {
    const id = this.props.id;
    const product = {
      ...this.props.products,
      quantity: 1,
      id: id
    };
    this.props.addToCart(this.props.item, product);
  };
  render() {
    const { imageUrl, price, title } = this.props.products;
    const id = this.props.id;
    const product = this.props.item.filter(p => p.id === id);
    let quantity = 0;
    if (product.length > 0) {
      quantity = product[0].quantity;
    }
    return (
      <div>
        <Card className="custom-card">
          <CardImg top width="100%" src={imageUrl} alt={title} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>Price: {price}</CardSubtitle>
          </CardBody>
          {quantity === 0 ? (
            <Button color="primary" block onClick={this.addToCart}>
              Add To cart
            </Button>
          ) : (
            <ProductQuantity id={this.props.id} product={this.props.products} />
          )}
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.cart.items
});
export default connect(
  mapStateToProps,
  { addToCart }
)(ProductCard);

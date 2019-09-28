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

import { addToCart, removeFromCart } from "../../action/cartAction";
import { connect } from "react-redux";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true
    };

    this.getProductQuantity = this.getProductQuantity.bind(this);
  }
  addToCart = () => {
    // const { category, imageUrl, price, title } = this.props.products;
    const id = this.props.id;
    const product = {
      ...this.props.products,
      quantity: 1,
      id: id
    };
    this.props.addToCart(this.props.item, product);
  };

  removeFromCart = () => {
    // const { category, imageUrl, price, title } = this.props.products;
    const id = this.props.id;
    const product = {
      ...this.props.products,
      quantity: 1,
      id: id
    };
    this.props.removeFromCart(this.props.item, product);
  };

  getProductQuantity() {
    // const item = this.props.item;
    const id = this.props.id;
    const product = this.props.item.filter(p => p.id === id);

    this.quantity = product[0].quantity;
    console.log(this.quantity);
  }
  render() {
    const { imageUrl, price, title } = this.props.products;
    return (
      <div>
        <Card className="custom-card">
          <CardImg top width="100%" src={imageUrl} alt={title} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>Price: {price}</CardSubtitle>
          </CardBody>

          <Button color="primary" block onClick={this.addToCart}>
            Add To cart
          </Button>
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
  { addToCart, removeFromCart }
)(ProductCard);

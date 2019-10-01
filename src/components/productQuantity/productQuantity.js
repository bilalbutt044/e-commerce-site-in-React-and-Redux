import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../action/cartAction";
import { Button } from "reactstrap";
class ProductQuantity extends Component {
  addToCart = () => {
    // const { category, imageUrl, price, title } = this.props.products;
    const id = this.props.id;
    const product = {
      ...this.props.product,
      quantity: 1,
      id: id
    };
    this.props.addToCart(this.props.item, product);
  };

  removeFromCart = () => {
    // const { category, imageUrl, price, title } = this.props.products;
    const id = this.props.id;
    const product = {
      ...this.props.product,
      quantity: 1,
      id: id
    };
    this.props.removeFromCart(this.props.item, product);
  };

  render() {
    const id = this.props.id;
    const product = this.props.item.filter(p => p.id === id);
    let quantity = 0;
    if (product.length > 0) {
      quantity = product[0].quantity;
    }
    return (
      <div className="row no-gutters">
        <div className="col-2">
          <Button onClick={this.removeFromCart} color="secondary" block>
            -
          </Button>
        </div>
        <div className="col text-center">{quantity} in cart</div>
        <div className="col-2">
          <Button onClick={this.addToCart} color="secondary" block>
            +
          </Button>
        </div>
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
)(ProductQuantity);

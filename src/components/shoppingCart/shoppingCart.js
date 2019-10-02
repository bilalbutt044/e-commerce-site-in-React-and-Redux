import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../navbar/navbar";
import { Button, Table } from "reactstrap";
import ProductQuantity from "../productQuantity/productQuantity";
import "./shoppingCart.css";
import { clearCart } from "../../action/cartAction";
class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clearCart = () => {
    this.props.clearCart();
  };
  render() {
    const item = this.props.item;
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="heading">
            <h1>Shopping Cart</h1>
          </div>
          <div className="description">
            <p>
              You have {item.length} items in your shopping cart.{" "}
              <Button className="btn-small" onClick={this.clearCart}>
                Clear Shopping Cart
              </Button>
            </p>
          </div>
          <div className="cart-table">
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {item.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <div
                        className="product-img"
                        style={{
                          backgroundImage: `url(${product.imageUrl})`
                        }}
                      ></div>
                    </td>
                    <td>{product.title}</td>
                    <td>
                      <ProductQuantity id={product.id} product={product} />
                    </td>
                    <td>
                      {parseFloat(product.price * product.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th className="text-right">
                    Total: {item.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </th>
                </tr>
              </tfoot>
            </Table>
          </div>
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
  { clearCart }
)(ShoppingCart);

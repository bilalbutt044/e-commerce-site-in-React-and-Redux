import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./shoppingCartSummary.css";
import { connect } from "react-redux";
class ShoppingCartSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card className="card">
        <CardBody>
          <h4>Order Summary</h4>
          <p>You Have {this.props.item.length} item in your shopping cart</p>
          <ul className="list-group list-group-flush">
            {this.props.item.map((p, index) => (
              <li key={index} className="list-group-item">
                {" "}
                {p.quantity} x {p.title}
                <div style={{ float: "right" }}>${p.quantity * p.price}</div>
              </li>
            ))}
            <li className="list-group-item">
              <strong>Total</strong>{" "}
              <strong style={{ float: "right" }}>
                {this.props.item.reduce((a, c) => a + c.price * c.quantity, 0)}
              </strong>{" "}
            </li>
          </ul>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  item: state.cart.items
});
export default connect(mapStateToProps)(ShoppingCartSummary);

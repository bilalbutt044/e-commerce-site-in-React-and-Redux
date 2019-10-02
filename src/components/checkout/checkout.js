import React, { Component } from "react";
import NavBar from "../navbar/navbar";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import ShoppingCartSummary from "../shopping-cart-summary/shoppingCartSummary";
import "./checkout.css";
class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="heading">
                <h1>Shipping</h1>
              </div>
              <div className="shipping-form">
                <Form onSubmit={this.formSubmit}>
                  <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input type="text" name="name" id="name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Address</Label>
                    <Input
                      type="text"
                      name="address1"
                      id="address1"
                      placeholder="Line2"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail"></Label>
                    <Input type="text" name="address2" id="Line2" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">City</Label>
                    <Input type="text" name="city" id="city" />
                  </FormGroup>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <ShoppingCartSummary />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;

import React, { Component } from "react";

import { fetchProducts } from "../../action/productActions";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products
  };
};

export default connect(
  null,
  { fetchProducts }
)(Home);

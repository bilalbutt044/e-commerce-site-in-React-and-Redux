import React from "react";
import { Button } from "reactstrap";

const ProductQuantity = ({ id, product, addToCart, removeFromCart, item }) => {
  const filteredProduct = item.filter(p => p.id === id);
  let quantity = 0;
  if (filteredProduct.length > 0) {
    quantity = filteredProduct[0].quantity;
  }
  return (
    <div className="row no-gutters">
      <div className="col-2">
        <Button onClick={() => removeFromCart(id)} color="secondary" block>
          -
        </Button>
      </div>
      <div className="col text-center">{quantity} in cart</div>
      <div className="col-2">
        <Button
          onClick={() => addToCart(id, filteredProduct)}
          color="secondary"
          block
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ProductQuantity;

import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./productCard.css";

import ProductQuantity from "../productQuantity/productQuantity";

const ProductCard = ({ products, id, addToCart, removeFromCart, item }) => {
  const { imageUrl, price, title } = products;
  const product = item.filter(p => p.id === id);
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
          <Button color="primary" block onClick={() => addToCart(id, products)}>
            Add To cart
          </Button>
        ) : (
          <ProductQuantity
            id={id}
            product={products}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            item={item}
          />
        )}
      </Card>
    </div>
  );
};

export default ProductCard;

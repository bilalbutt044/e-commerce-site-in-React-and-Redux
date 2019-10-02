import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from "../action/actionTypes";

export const addToCart = (item, product) => dispatch => {
  const existingProductIndex = item.findIndex(p => p.id === product.id);

  if (existingProductIndex >= 0) {
    const cartItems = item.slice();

    const existingProduct = cartItems[existingProductIndex];
    const updatedQuantityProduct = {
      ...existingProduct,
      quantity: existingProduct.quantity + product.quantity
    };
    cartItems[existingProductIndex] = updatedQuantityProduct;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    return dispatch({
      type: ADD_TO_CART,
      payload: cartItems
    });
  } else {
    localStorage.setItem("cartItems", JSON.stringify([...item, product]));
    return dispatch({
      type: ADD_TO_CART,
      payload: [...item, product]
    });
  }
};

export const removeFromCart = (item, product) => dispatch => {
  const existingProductIndex = item.findIndex(p => p.id === product.id);
  let cartItems = item.slice();

  const existingProduct = cartItems[existingProductIndex];
  const updatedQuantityProduct = {
    ...existingProduct,
    quantity: existingProduct.quantity - product.quantity
  };

  if (updatedQuantityProduct.quantity === 0) {
    cartItems.splice(existingProductIndex, 1);
  } else {
    cartItems[existingProductIndex] = updatedQuantityProduct;
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  return dispatch({
    type: REMOVE_FROM_CART,
    payload: cartItems
  });
};

export const clearCart = () => dispatch => {
  localStorage.removeItem("cartItems");

  dispatch({
    type: CLEAR_CART,
    payload: []
  });
};

import { FETCH_PRODUCTS } from "./actionTypes";

export const fetchProducts = () => dispatch => {
  return dispatch({
    type: FETCH_PRODUCTS,
    payload: "products"
  });
};

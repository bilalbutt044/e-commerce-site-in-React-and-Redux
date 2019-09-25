import { FETCH_PRODUCTS, FETECH_CATEGORIES } from "./actionTypes";

export const fetchProducts = () => dispatch => {
  return dispatch({
    type: FETCH_PRODUCTS,
    payload: "products"
  });
};

export const fetchCategories = () => dispatch => {
  return dispatch({
    type: FETECH_CATEGORIES,
    payload: "categories"
  });
};

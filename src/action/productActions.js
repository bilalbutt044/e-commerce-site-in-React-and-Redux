import axios from "axios";
import {
  FETCH_PRODUCTS,
  FETECH_CATEGORIES,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from "./actionTypes";

export const fetchProducts = () => dispatch => {
  return dispatch({
    type: FETCH_PRODUCTS,
    payload: "products"
  });
};

export const fetchCategories = () => async dispatch => {
  await dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await axios.get(
      "https://e-commerce-site-eb787.firebaseio.com/categories.json"
    );

    return dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    return dispatch({ type: FETCH_PRODUCTS_ERROR });
  }
};

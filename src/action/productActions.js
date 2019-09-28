import axios from "axios";
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from "./actionTypes";

export const fetchProducts = () => async dispatch => {
  await dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await axios.get(
      "https://e-commerce-site-eb787.firebaseio.com/products.json"
    );
    return dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    return dispatch({ type: FETCH_PRODUCTS_ERROR });
  }
};

export const fetchCategories = () => async dispatch => {
  await dispatch({ type: FETCH_CATEGORIES_REQUEST });
  try {
    const response = await axios.get(
      "https://e-commerce-site-eb787.firebaseio.com/categories.json"
    );

    return dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    return dispatch({ type: FETCH_CATEGORIES_ERROR });
  }
};

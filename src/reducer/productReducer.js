import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_REQUEST,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from "../action/actionTypes";

const initialState = {
  productsList: [],
  productCategories: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isloading: true,
        productsList: []
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isloading: false,
        productsList: action.payload
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        isloading: false
      };

    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isloading: true,
        productCategories: []
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isloading: false,
        productCategories: action.payload
      };
    case FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        isloading: false
      };
    default:
      return state;
  }
}

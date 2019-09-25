import {
  FETCH_PRODUCTS,
  FETECH_CATEGORIES,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_REQUEST
} from "../action/actionTypes";

const initialState = {
  productsList: [],
  productCategories: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productsList: []
      };
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isloading: true,
        productCategories: []
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isloading: false,
        productCategories: action.payload
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        isloading: false
      };
    case FETECH_CATEGORIES:
      return {
        ...state,
        productCategories: action.payload
      };
    default:
      return state;
  }
}

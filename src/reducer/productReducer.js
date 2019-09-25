import { FETCH_PRODUCTS, FETECH_CATEGORIES } from "../action/actionTypes";

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
    case FETECH_CATEGORIES:
      return {
        ...state,
        productCategories: []
      };
    default:
      return state;
  }
}

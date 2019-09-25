import { FETCH_PRODUCTS } from "../action/actionTypes";

const initialState = {
  products: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: []
      };
    default:
      return state;
  }
}

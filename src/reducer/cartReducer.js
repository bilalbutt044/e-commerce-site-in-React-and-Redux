import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from "../action/actionTypes";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: action.payload
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: action.payload
      };
    case CLEAR_CART:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}

import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/actionTypes";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  console.log(action.payload);
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
    default:
      return state;
  }
}

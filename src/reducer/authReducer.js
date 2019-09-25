import { LOGIN, LOGOUT, REGISTER } from "../action/actionTypes";

const initialState = {
  login: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        Login: true
      };
    default:
      return state;
  }
}

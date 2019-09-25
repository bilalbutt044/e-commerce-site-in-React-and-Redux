import { LOGIN, LOGOUT, REGISTER } from "./actionTypes";

export const login = () => dispatch => {
  dispatch({
    type: LOGIN,
    payload: "successfull login"
  });
};

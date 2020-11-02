import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  GET_USER,
} from "../constants";
import axios from "axios";
import { jsonHeader, tokenConfig } from "../utils/postHeaders";

export const login = (loginDetail) => (dispatch) => {
  const { username, password } = loginDetail;

  const config = jsonHeader();
  const body = JSON.stringify({ username, password });
  axios
    .post(
      "https://robinshrestha.pythonanywhere.com/api/auth/login",
      body,
      config
    )
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL });
    });
};

export const getUser = () => (dispatch, getState) => {
  const config = tokenConfig(getState);
  axios
    .get("https://robinshrestha.pythonanywhere.com/api/auth/user", config)
    .then((res) => {
      dispatch({ type: GET_USER, payload: res.data });
    })
    .catch((err) => {
      // console.log(err.message);
      dispatch({ type: AUTH_ERROR });
    });
};

export const logout = () => (dispatch, getState) => {
  const config = tokenConfig(getState);
  axios
    .post(
      "https://robinshrestha.pythonanywhere.com/api/auth/logout",
      null,
      config
    )
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

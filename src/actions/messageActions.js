import {
  FETCH_ALL_MESSAGES,
  CHECKED_MESSAGES,
  DELETE_MESSAGES,
  POST_MESSAGE,
} from "../constants";
import axios from "axios";
import { tokenConfig, jsonHeader } from "../utils/postHeaders";

export const fetchMessages = () => (dispatch, getState) => {
  const config = tokenConfig(getState);
  axios
    .get("https://robinshrestha.pythonanywhere.com/api/message/read", config)
    .then((res) => {
      dispatch({ type: FETCH_ALL_MESSAGES, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postMessage = (messageData) => (dispatch) => {
  const { name, email, subject, message } = messageData;
  const body = JSON.stringify({ name, email, subject, message });
  const config = jsonHeader();

  axios
    .post(
      "https://robinshrestha.pythonanywhere.com/api/message/write",
      body,
      config
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteSingleMessage = (messageId) => (dispatch, getState) => {
  const config = tokenConfig(getState);
  axios
    .delete(
      `https://robinshrestha.pythonanywhere.com/api/message/read/${messageId}`,
      config
    )
    .then((res) => {
      dispatch({ type: DELETE_MESSAGES, payload: messageId });
    })
    .catch((err) => {
      console.log(err.messae);
    });
};

export const checkSingleMessage = (checkedId, checked) => (
  dispatch,
  getState
) => {
  const config = tokenConfig(getState);
  const body = JSON.stringify({ checked });
  axios
    .put(
      `https://robinshrestha.pythonanywhere.com/api/message/read/${checkedId}`,
      body,
      config
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

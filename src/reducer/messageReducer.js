import {
  FETCH_ALL_MESSAGES,
  //   CHECKED_MESSAGES,
  //   DELETE_MESSAGES,
} from "../constants";

const initialState = {
  messages: [],
};
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MESSAGES: {
      return { ...state, messages: action.payload };
    }

    default:
      return state;
  }
};
export default messageReducer;

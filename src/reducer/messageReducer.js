import {
  FETCH_ALL_MESSAGES,
  //   CHECKED_MESSAGES,
  DELETE_MESSAGES,
  DELETE_MULTIPLE_MESSAGES,
} from "../constants";

const initialState = {
  messages: [],
};
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MESSAGES: {
      return { ...state, messages: action.payload };
    }
    case DELETE_MESSAGES: {
      const newMessages = state.messages.filter(
        (message) => message.id !== action.payload
      );
      return { ...state, messages: newMessages };
    }
    case DELETE_MULTIPLE_MESSAGES: {
      const newMessages = state.messages.filter(
        (message) => !action.payload.includes(message.id)
      );
      return { ...state, messages: newMessages };
    }

    default:
      return state;
  }
};
export default messageReducer;

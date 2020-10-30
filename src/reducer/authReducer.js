import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  GET_USER,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
} from "../constants";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    }
    case GET_USER: {
      return { ...state, isAuthenticated: true, user: action.payload };
    }
    case LOGOUT_SUCCESS:
    case LOGIN_FAIL:
    case AUTH_ERROR: {
      localStorage.removeItem("token");
      return { ...state, token: null, isAuthenticated: false, user: null };
    }
    default:
      return state;
  }
};
export default authReducer;

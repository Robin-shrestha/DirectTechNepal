import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./authReducer";

const rootReducer = combineReducers({ auth });
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;

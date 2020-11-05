import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./authReducer";
import galleryReducer from "./galleryReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({ auth, galleryReducer, messageReducer });
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;

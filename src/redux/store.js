import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

let middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

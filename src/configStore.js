import { applyMiddleware, compose, createStore } from "redux";
import { combineReducers } from '@reduxjs/toolkit';
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import ui from './redux/ui';

let middleware = [thunkMiddleware];

middleware = [...middleware, logger];

const reducers = combineReducers({
    ui: ui.reducer,
})

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(...middleware));
  return createStore(reducers, initialState, enhancer);
}

export default configureStore({});

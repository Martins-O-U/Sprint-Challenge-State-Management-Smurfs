import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from 'react-router-dom'
import "./index.css";
import App from "./components/App";
import * as reducers from "./components/states/reducer";

const monsterReducer = combineReducers({
  formValues: reducers.addSmurReducer,
  api: reducers.getSmurfReducer
});

const store = createStore(
  monsterReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router> <App /></Router>
  </Provider>,
  document.getElementById("root")
);
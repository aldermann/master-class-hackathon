import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const defaultState = {
  idCurrent: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CLICK": {
      const newState = Object.assign({}, state);
      newState[action.name] = action.value;
      return newState;
    }
    default:
  }
};
const store = createStore(reducer, defaultState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

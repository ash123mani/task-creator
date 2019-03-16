import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers/index";
import { getTasks } from "./utils/getTasks";
import "./index.css";
import App from "./App";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

if (!localStorage.tasks) {
  localStorage.setItem("tasks", "[]");
} else {
  store.dispatch({ type: "SET_TASKS", payload: getTasks() });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

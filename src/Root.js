import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";

const Root = ({ children, innitialState = {} }) => {
  const store = createStore(reducers, innitialState, applyMiddleware(thunk));
  return <Provider store={store}>{children}</Provider>;
};

export default Root;

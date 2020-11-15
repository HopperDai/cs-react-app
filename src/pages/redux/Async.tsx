import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middle = [thunk];
const store = createStore()

export default function ReduxAsync() {
  return <div>111</div>;
}

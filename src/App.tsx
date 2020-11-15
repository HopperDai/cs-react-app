import * as React from "react";
import "./styles.css";
import { createStore } from "redux";

const reducer = (state = [], action: any) => {
  console.log(action);
  return state;
};

interface IAction {
  type: string;
  text: string;
}
interface ITodoState {
  todos: any[];
}

const ADD_TODO = "ADD_TODO";
const initialState: ITodoState = {
  todos: []
};

function todoApp(state = initialState, action: IAction) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });
    default:
      return state;
  }
}

console.log(todoApp);

const action = {
  type: ADD_TODO,
  text: "Build my first Redux app"
};

console.log(action);

const store = createStore(reducer);
console.log(store);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

import React from "react";
import { createStore, combineReducers, bindActionCreators } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

interface IState {
  count: number;
}
interface IAction {
  type: string;
}

function runRedux() {
  // initial state
  const initialState: IState = { count: 0 };

  // reducer
  const counter = (state = initialState, action: IAction) => {
    switch (action.type) {
      case "PLUS_ONE":
        return { count: state.count + 1 };
      case "MINUS_ONE":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const todos = (state = {}) => state;

  // create store
  const store = createStore(counter);
  // const store = createStore(
  //   combineReducers({
  //     counter,
  //     todos
  //   }),
  //   composeWithDevTools()
  // );
  const { getState, dispatch, subscribe } = store;

  // action creator: 产生 action 的函数
  function plusOne() {
    return { type: "PLUS_ONE" };
  }
  function minusOne() {
    return { type: "MINUS_ONE" };
  }
  const plusOne2 = bindActionCreators(plusOne, dispatch);

  subscribe(() => console.log("变化后的 state:", getState()));
  dispatch(plusOne());
  dispatch(minusOne());
  plusOne2(); // 使用 action 更简单
}

export default function PureBasic() {
  return <button onClick={runRedux}>运行 redux</button>;
}

// 与 ui 没有直接关系，脱离 ui 直接运行的 js 程序

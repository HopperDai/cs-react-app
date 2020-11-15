import React, { Dispatch } from "react";
import { createStore, bindActionCreators } from "redux";
import { connect, Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

interface IState {
  count: number;
}
interface IAction {
  type: string;
}

// reducer
const initialState: IState = { count: 1 };
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

// action creator
const plusOne = () => ({ type: "PLUS_ONE" });
const minusOne = () => ({ type: "MINUS_ONE" });

// create store
const store = createStore(counter, composeWithDevTools());

// component
function CounterComp({ count, plusOne, minusOne }: any) {
  return (
    <div className="counter-comp">
      <button onClick={minusOne}>-1</button>
      <span style={{ margin: "0 20px" }}>{count}</span>
      <button onClick={plusOne}>+1</button>
    </div>
  );
}

// state 绑定到 props
function mapStateToProps(state: IState) {
  return { count: state.count };
}

// dispatch 绑定到 props
function mapDispatchToProps(dispatch: Dispatch<any>) {
  return bindActionCreators({ plusOne, minusOne }, store.dispatch);
}

// connect
const ConnectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComp);

export default function ReactUse() {
  return (
    <div className="react-redux">
      <Provider store={store}>
        <ConnectContainer />
      </Provider>
    </div>
  );
}

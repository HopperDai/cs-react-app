import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { fetchListReducer } from "../../redux/reducers/fetchList";
import { fetchList } from "../../redux/actions/fetchList";

function RenderList({ result }: any) {
  if (!result) return <span>初始状态</span>;
  if (result.fetchPending) return <span>请求中......</span>;
  if (result.fetchError) return <span>请求出错：{result.errorInfo}</span>;

  return result.list.length ? (
    result.list.map(({ name }: any, i: number) => <div key={name}>{name}</div>)
  ) : (
    <span>空空如也</span>
  );
}

const store = createStore(fetchListReducer, applyMiddleware(thunk));

const mapStateToProp = (state: any) => ({ result: state });
const doFetchList = fetchList();

const RenderListContainer = connect(mapStateToProp)(RenderList);

export default function ReduxAsync() {
  return (
    <Provider store={store}>
      <button onClick={() => doFetchList(store.dispatch)}>获取数据</button>
      <RenderListContainer />
    </Provider>
  );
}

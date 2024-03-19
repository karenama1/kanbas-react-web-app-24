import React from "react";
import store from "../../store";
import { Provider } from "react-redux";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";

const ReduxExamples = () => {
  return(
    <Provider store={store}>
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>
    </div>
</Provider>
  );
};

export default ReduxExamples;
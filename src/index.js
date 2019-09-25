import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { Provider } from "react-redux";
import store from "./store/store";
import Routes from "./components/route";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

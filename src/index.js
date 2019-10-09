import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./store/store";
import Routes from "./components/route";
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import config from "./config";
function App() {
  return (
    <Provider store={store}>
      <FirebaseAuthProvider firebase={firebase} {...config}>
        <Routes />
      </FirebaseAuthProvider>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

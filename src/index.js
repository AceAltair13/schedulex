import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";
import { HashRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./assets/styles.css";

const persistor = persistStore(store);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);

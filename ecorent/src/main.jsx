import React from "react";
import ReactDOM from "react-dom/client";
import EcoApp from "./EcoApp.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./EcoApp/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <EcoApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import EcoApp from "./EcoApp.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <EcoApp />
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./scripts/App";
import "./styles/css/index.css";
import "./styles/scss/index.scss";

// Путь к корневому(главному) элементу в реальном DOM.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Указание места рендера(отрисовки) компонентов из виратульного DOM в реальном DOM.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

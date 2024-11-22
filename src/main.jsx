import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ApiContext from "./context/api.js";
import api from "./api/api.js";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <ApiContext.Provider value={api}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiContext.Provider>,
);

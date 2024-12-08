import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ApiContext from "./context/api.js";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import api from "./context/api.js";
import { Provider } from "react-redux";

// console.log(store.dispatch(load()));

createRoot(document.getElementById("root")).render(
  <ApiContext.Provider value={api}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApiContext.Provider>,
);

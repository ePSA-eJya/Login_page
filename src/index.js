import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
    {/* The ToastContainer should typically be placed once in your app, usually at the root level. was receiving an error so put it here.
    Cannot read properties of undefined (reading 'props')
    TypeError: Cannot read properties of undefined (reading 'props')
    at deleteToast (http://localhost:3000/static/js/bundle.js:50226:27) */}
  </React.StrictMode>
);

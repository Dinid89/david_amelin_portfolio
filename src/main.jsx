import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'flowbite';
import "./index.css"; // <- c'est ici que Tailwind doit être importé

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
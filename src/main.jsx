import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LangProvider } from "./context/langContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LangProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LangProvider>
);

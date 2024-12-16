// src/main.jsx
import ReactDOM from "react";
import App from "./App";
import { UserProvider } from "./userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);

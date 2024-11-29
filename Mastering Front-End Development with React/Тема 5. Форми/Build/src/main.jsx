import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import LoginForm from "./LoginForm.jsx";
// import SearchBar from "./SearchBar.jsx";
import "modern-normalize";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginForm />
    {/* <App /> */}
    {/* <SearchBar /> */}
  </StrictMode>
);

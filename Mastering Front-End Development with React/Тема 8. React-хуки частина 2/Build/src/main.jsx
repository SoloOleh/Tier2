import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ComponentA, ComponentB } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComponentA />
    <ComponentB />
  </StrictMode>
);

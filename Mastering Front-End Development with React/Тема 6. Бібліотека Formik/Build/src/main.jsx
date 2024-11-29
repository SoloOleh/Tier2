import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "modern-normalize";
import FeedbackForm from "./FeedbackForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FeedbackForm />
  </StrictMode>
);

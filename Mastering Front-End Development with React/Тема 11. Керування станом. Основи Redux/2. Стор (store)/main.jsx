// Для того щоб будь-який компонент у додатку міг використовувати стор, обертаємо Provider все дерево компонентів.

// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

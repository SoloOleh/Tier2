// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
//=============== Before ========================
// import { tasksReducer, filtersReducer } from "./reducer";

//=============== After ========================
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

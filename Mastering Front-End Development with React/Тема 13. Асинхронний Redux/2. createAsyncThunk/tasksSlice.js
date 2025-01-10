// src/redux/tasksSlice.js

// import { createSlice } from "@reduxjs/toolkit";
// // Імпортуємо операцію
// import { fetchTasks } from "./operations";

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   }, // Додаємо обробку зовнішніх екшенів
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, (state, action) => {})
//       .addCase(fetchTasks.fulfilled, (state, action) => {})
//       .addCase(fetchTasks.rejected, (state, action) => {});
//   },
// });

// export const tasksReducer = tasksSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;

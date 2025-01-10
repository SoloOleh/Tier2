// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const tasksSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(toggleCompleted.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(toggleCompleted.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }); // Код решти редюсерів
  },
});

export const tasksReducer = tasksSlice.reducer;

// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./operations";

const tasksSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // Код решти редюсерів
  },
});

export const tasksReducer = tasksSlice.reducer;

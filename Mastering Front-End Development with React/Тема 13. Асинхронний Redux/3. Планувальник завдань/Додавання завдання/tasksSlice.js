// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask } from "./operations";

const tasksSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }); // Код решти редюсерів
  },
});

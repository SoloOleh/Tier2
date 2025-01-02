// Нам більше не потрібний файл reducer.js, тому що під кожен слайс ми створимо окремий файл. Для слайсу завдань це буде файл tasksSlice.js

// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

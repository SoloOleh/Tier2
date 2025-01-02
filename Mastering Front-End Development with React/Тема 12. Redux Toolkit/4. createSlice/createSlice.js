// const appState = {
//   tasks: [],
//   filters: {},
// };

// import { createSlice } from "@reduxjs/toolkit";

// const tasksSlice = createSlice({
//   // Ім'я слайсу
//   name: "tasks", // Початковий стан редюсера слайсу
//   initialState: [], // Об'єкт редюсерів
//   reducers: {
//     addTask(state, action) {},
//     deleteTask(state, action) {},
//     toggleCompleted(state, action) {},
//   },
// });

// // Генератори екшенів
// const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

// // Редюсер слайсу
// const tasksReducer = tasksSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const tasksSlice = createSlice({
//   // Ім'я слайсу
//   name: "tasks", // Початковий стан редюсера слайсу
//   initialState: [], // Об'єкт редюсерів
//   reducers: {
//     addTask(state, action) {},
//     deleteTask(state, action) {},
//     toggleCompleted(state, action) {},
//   },
// });

// // Генератори екшенів
// const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

// // Редюсер слайсу
// const tasksReducer = tasksSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
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

const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
const tasksReducer = tasksSlice.reducer;

import { createAction } from "@reduxjs/toolkit";

const addTask = createAction("tasks/AddTask");

// У генератора екшену є властивість type
console.log(addTask.type); // "tasks/AddTask"

// Метод toString() функції addTask був перевизначений
console.log(addTask.toString()); // "tasks/AddTask"

// src/redux/reducers.js

import { addTask, deleteTask, toggleCompleted } from "../actions";

export const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case addTask.type:
      return [...state, action.payload];

    case deleteTask.type:
      return state.filter((task) => task.id !== action.payload);

    case toggleCompleted.type:
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });

    default:
      return state;
  }
};

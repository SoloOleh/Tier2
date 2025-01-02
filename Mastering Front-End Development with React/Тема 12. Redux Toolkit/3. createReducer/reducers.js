// createReducer(initialState, builderCallback);

// createReducer({}, (builder) => {
//   builder.addCase(actionType, (state, action) => {});
// });

// addCase(action, reducer);

// src/redux/reducers.js

import { createReducer } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
import { addTask, deleteTask, toggleCompleted } from "./actions";

const tasksInitialState = [];

//=============== Before ========================
const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case addTask.type:
    // case logic
    case deleteTask.type:
    // case logic
    case toggleCompleted.type:
    // case logic
    default:
      return state;
  }
};

//=============== After ========================
export const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {})
    .addCase(deleteTask, (state, action) => {})
    .addCase(toggleCompleted, (state, action) => {});
});

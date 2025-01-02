// src/redux/reducers.js

//=============== Before ========================
import { combineReducers } from "redux";
import { statusFilters } from "./constants";

const tasksInitialState = [];

const tasksReducer = (state = tasksInitialState, action) => {
  // Reducer code
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  // Reducer code
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

//=============== After ========================
import { statusFilters } from "./constants";

const tasksInitialState = [];

export const tasksReducer = (state = tasksInitialState, action) => {
  // Reducer code
};

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  // Reducer code
};

// src/redux/actions.js

//=============== Before ========================
const addTask = (text) => {
  return { type: "tasks/AddTask", payload: text };
};

console.log(addTask("Learn Redux Toolkit"));
// {type: "tasks/addTask", payload: "Learn Redux Toolkit"}

//=============== After ========================
import { createAction } from "@reduxjs/toolkit";

const addTask = createAction("tasks/AddTask");

console.log(addTask("Learn Redux Toolkit"));
{type: "tasks/addTask", payload: "Learn Redux Toolkit"}


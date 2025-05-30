// src/redux/reducers.js

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

// Відповідає лише за оновлення властивості tasks
// Тепер значенням параметра state буде масив завдань
const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];
    case "tasks/deleteTask":
      return state.filter((task) => task.id !== action.payload);
    case "tasks/toggleCompleted":
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

const filtersInitialState = {
  status: statusFilters.all,
};

// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

// Тепер у нас є два окремі редюсери, але при створенні стора необхідно передати один кореневий редюсер, який відповідає за весь стан Redux. Ми можемо написати кореневий редюсер так, щоб він просто викликав два інші редюсери і передавав їм необхідну частину стану та екшен. Це і є композиція редюсерів.

// src/redux/reducers.js

// Код редюсерів tasksReducer та filtersReducer

// export const rootReducer = (state = {}, action) => {
//   // Повертаємо об'єкт стану
//   return {
//     // Обом редюсерам передаємо тільки частину стану,
//     // за яку вони відповідають.
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

// src/redux/reducers.js

// Імпортуємо функцію композиції редюсерів
import { combineReducers } from "redux";

// Код редюсерів tasksReducer та filtersReducer

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

// src/redux/reducers.js

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Попередній код case "tasks/addTask"

    case "tasks/deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

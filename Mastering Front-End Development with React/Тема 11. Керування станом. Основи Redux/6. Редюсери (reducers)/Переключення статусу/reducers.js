// src/redux/reducers.js

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Попередній код case "tasks/addTask"

    // Попередній код case "tasks/deleteTask"

    case "tasks/toggleCompleted":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
          };
        }),
      };

    default:
      return state;
  }
};

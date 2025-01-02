// src/redux/reducers.js

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Попередній код case "tasks/addTask"

    // Попередній код case "tasks/deleteTask"

    // Попередній код case "tasks/toggleCompleted"

    case "filters/setStatusFilter":
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };

    default:
      return state;
  }
};

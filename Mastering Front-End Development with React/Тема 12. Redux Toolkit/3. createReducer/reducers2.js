// src/redux/reducers.js

export const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(deleteTask, (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    })
    .addCase(toggleCompleted, (state, action) => {
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });
    });
});

export const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  });
});

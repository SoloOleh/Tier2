// src/redux/reducers.js

export const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      // ✅ Immer замінить це на операцію оновлення
      state.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      // ✅ Immer замінить це на операцію оновлення
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    })
    .addCase(toggleCompleted, (state, action) => {
      // ✅ Immer замінить це на операцію оновлення
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    });
});

export const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    // ✅ Immer замінить це на операцію оновлення
    state.status = action.payload;
  });
});

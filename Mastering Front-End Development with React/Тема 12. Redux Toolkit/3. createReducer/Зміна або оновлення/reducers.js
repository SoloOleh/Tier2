// src/redux/reducers.js

export const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder.addCase(deleteTask, (state, action) => {
    // ❌ Не правильно
    // state.filter(task => task.id !== action.payload)

    // ✅ Правильно
    return state.filter((task) => task.id !== action.payload);
  });
});

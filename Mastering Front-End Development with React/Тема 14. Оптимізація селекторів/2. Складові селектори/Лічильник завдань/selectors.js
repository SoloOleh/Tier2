// src/redux/selectors.js

// Решта селекторів

export const selectTasks = (state) => state.tasks.items;

export const selectTaskCount = (state) => {
  const tasks = selectTasks(state);

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
};

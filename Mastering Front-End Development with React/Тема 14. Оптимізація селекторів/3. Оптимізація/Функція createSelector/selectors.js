// import { createSelector } from "@reduxjs/toolkit";

// const selector = createSelector(
//   // Масив вхідних селекторів
//   [inputSelector1, inputSelector2, inputSelector3], // Функція перетворювач
//   (result1, result2, result3) => {
//     // Виконуємо обчислення та повертаємо результат
//   }
// );

// import { createSelector } from "@reduxjs/toolkit";

// // Решта селекторів

// export const selectTaskCount = createSelector([selectTasks], (tasks) => {
//   console.log("Calculating task count. Now memoized!");

//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// });

// src/redux/selectors.js

import { createSelector } from "@reduxjs/toolkit";

// Решта селекторів

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log("Calculating visible tasks. Now memoized!");

    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter((task) => !task.completed);
      case statusFilters.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

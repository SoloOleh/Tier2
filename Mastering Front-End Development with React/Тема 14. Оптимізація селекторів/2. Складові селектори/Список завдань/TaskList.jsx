// src/components/TaskList/TaskList.jsx

// import { useSelector } from "react-redux";
// import { selectTasks, selectStatusFilter } from "redux/selectors";
// import { statusFilters } from "redux/constants";

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter((task) => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const TaskList = () => {
//   const tasks = useSelector(selectTasks);
//   const statusFilter = useSelector(selectStatusFilter);
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);

//   // Рендер JSX розмітки
// };

// src/components/TaskList/TaskList.jsx

import { useSelector } from "react-redux";
import { selectVisibleTasks } from "redux/selectors";

export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

  // Рендер JSX розмітки
};

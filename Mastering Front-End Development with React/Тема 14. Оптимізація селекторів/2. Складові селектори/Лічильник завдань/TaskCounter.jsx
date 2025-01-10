// // src/components/TaskCounter/TaskCounter.jsx

// import { useSelector } from "react-redux";
// import { selectTasks } from "redux/selectors";

// export const TaskCounter = () => {
//   const tasks = useSelector(selectTasks);

//   const count = tasks.reduce(
//     (acc, task) => {
//       if (task.completed) {
//         acc.completed += 1;
//       } else {
//         acc.active += 1;
//       }
//       return acc;
//     },
//     { active: 0, completed: 0 }
//   );

//   // Рендер JSX розмітки
// };

// src/components/TaskCounter/TaskCounter.jsx

import { useSelector } from "react-redux";
import { selectTaskCount } from "redux/selectors";

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  // Рендер JSX розмітки
};

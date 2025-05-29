import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

// const Todolist = ({ todos, removeTodo, toggleTodoComplete }) => {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           removeTodo={removeTodo}
//           toggleTodoComplete={toggleTodoComplete}
//           {...todo}
//         />
//       ))}
//     </ul>
//   );
// };

const Todolist = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          // removeTodo={removeTodo}
          // toggleTodoComplete={toggleTodoComplete}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default Todolist;

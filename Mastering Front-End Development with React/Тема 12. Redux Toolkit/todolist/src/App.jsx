import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import Todolist from "./components/Todolist";
import "./App.css";
import InputField from "./components/InputField";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");
//   const addTodo = () => {
//     if (text.trim().length) {
//       setTodos([
//         ...todos,
//         {
//           id: new Date().toISOString(),
//           text,
//           completed: false,
//         },
//       ]);
//       setText("");
//     }
//   };
//   const removeTodo = (todoId) => {
//     setTodos(todos.filter((todo) => todo.id !== todoId));
//   };

//   const toggleTodoComplete = (todoId) => {
//     setTodos(
//       todos.map((todo) => {
//         if (todo.id !== todoId) return todo;

//         return {
//           ...todo,
//           completed: !todo.completed,
//         };
//       })
//     );
//   };

//   return (
//     <div classname="App">
//       {/* <label>
//         <input
//           placeholder="Enter text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button onClick={addTodo}>Add</button>
//       </label> */}
//       <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
//       {/* <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodoComplete(todo.id)}
//             />
//             <span>{todo.text}</span>
//             <span className="delete" onClick={() => removeTodo(todo.id)}>
//               &times;
//             </span>
//           </li>
//         ))}
//       </ul> */}
//       <Todolist
//         todos={todos}
//         toggleTodoComplete={toggleTodoComplete}
//         removeTodo={removeTodo}
//       />
//     </div>
//   );
// }

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  // const toggleTodoComplete = (todoId) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id !== todoId) return todo;
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     })
  //   );
  // };

  //   return (
  //     <div classname="App">
  //       <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
  //       <Todolist
  //         toggleTodoComplete={toggleTodoComplete}
  //         removeTodo={removeTodo}
  //       />
  //     </div>
  //   );
  // }

  return (
    <div classname="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <Todolist />
    </div>
  );
}

export default App;

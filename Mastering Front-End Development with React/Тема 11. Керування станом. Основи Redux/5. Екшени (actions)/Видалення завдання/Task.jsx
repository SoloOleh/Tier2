// src/components/Task/Task.jsx

// Імпортуємо хук
import { useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { deleteTask } from "../../redux/actions";

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // Викликаємо генератор екшену
  // та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <div>
      <input type="checkbox" />
      <p>{task.text}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

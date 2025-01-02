// src/components/StatusFilter/StatusFilter.jsx

// Імпортуємо хук
import { useSelector } from "react-redux";
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from "../../redux/constants";

export const StatusFilter = () => {
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector((state) => state.filters.status);

  return (
    <div>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};

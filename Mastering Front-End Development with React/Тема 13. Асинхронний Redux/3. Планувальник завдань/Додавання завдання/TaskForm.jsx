// src/components/TaskForm/TaskForm.jsx

import { useDispatch } from "react-redux";
import { addTask } from "redux/operations";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
  };

  // Решта коду компонента
};

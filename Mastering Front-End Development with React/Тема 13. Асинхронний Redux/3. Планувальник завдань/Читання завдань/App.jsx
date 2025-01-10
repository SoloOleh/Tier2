// src/components/App.jsx

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "redux/operations";
// Імпорти компонентів

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

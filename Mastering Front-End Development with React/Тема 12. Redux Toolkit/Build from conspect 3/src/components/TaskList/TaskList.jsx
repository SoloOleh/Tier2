import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { getTasks, getStatusFilter } from '../../redux/selectors';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case 'active':
      return tasks.filter((task) => !task.completed);
    case 'completed':
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

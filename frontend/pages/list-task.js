import { useEffect, useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const filteredTasks = statusFilter
    ? tasks.filter(task => task.status === statusFilter)
    : tasks;

  return (
    <div>
      <h2>Task List</h2>
      <select
        onChange={(e) => setStatusFilter(e.target.value)}
        value={statusFilter}
      >
        <option value="">All</option>
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

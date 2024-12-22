import { useState } from 'react';

const CreateTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'TODO',
    priority: 'LOW',
    dueDate: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    if (response.ok) {
      alert('Task created');
      window.location.href = '/dashboard'; // Redirect to dashboard after task creation
    } else {
      alert('Error creating task');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </label>
      <label>
        Status
        <select
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
        >
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
      </label>
      <label>
        Priority
        <select
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>
      </label>
      <label>
        Due Date
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;

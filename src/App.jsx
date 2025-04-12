import React, { useState } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="container mt-4">
    
      <nav className="navbar navbar-dark bg-warning mb-4 rounded text-danger">
        <div className="container-fluid">
          <span className="navbar-brand">Todo List App</span>
        </div>
      </nav>


      <div className="mb-3 d-flex">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>

     
      <ul className="list-group">
        {tasks.map((t, index) => (
          <TodoItem key={index} text={t} index={index} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default App;

// App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [filterCompletion, setFilterCompletion] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const currentDate = new Date().toISOString().split('T')[0];

  const filteredTasks = tasks
    .filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterPriority ? task.priority === filterPriority : true) &&
      (filterCompletion ? (filterCompletion === 'Completed' ? task.completed : !task.completed) : true)
    );

  const upcomingTasks = filteredTasks.filter(task => !task.completed && task.dueDate > currentDate);
  const overdueTasks = filteredTasks.filter(task => !task.completed && task.dueDate < currentDate);
  const completedTasks = filteredTasks.filter(task => task.completed);

  return (
    <div className="App">
      <h1>Task Manager Dashboard</h1>
      <TaskForm addTask={addTask} />

      <div className="filters">
        <input
          type="text"
          placeholder="Search Tasks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select value={filterCompletion} onChange={(e) => setFilterCompletion(e.target.value)}>
          <option value="">All Tasks</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <TaskList title="Upcoming Tasks" tasks={upcomingTasks} editTask={editTask} deleteTask={deleteTask} />
      <TaskList title="Overdue Tasks" tasks={overdueTasks} editTask={editTask} deleteTask={deleteTask} />
      <TaskList title="Completed Tasks" tasks={completedTasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;

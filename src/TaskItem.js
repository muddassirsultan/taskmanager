// TaskItem.js
import React from 'react';

function TaskItem({ task, editTask, deleteTask }) {
    const toggleComplete = () => {
        editTask(task.id, { ...task, completed: !task.completed });
    };

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <button onClick={toggleComplete}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
}

export default TaskItem;

// TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ title, tasks, editTask, deleteTask }) {
    return (
        <div className="task-list">
            <h2>{title}</h2>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <TaskItem key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;

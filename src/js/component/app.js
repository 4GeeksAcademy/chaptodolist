import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = (event) => {
        if (event.key === 'Enter' && task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="TodoList">
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={handleInputChange}
                    onKeyDown={handleAddTask}
                    placeholder="Enter a task"
                />
            </div>
            <ul>
                {tasks.length === 0 ? (
                    <p>No tasks, add a task</p>
                ) : (
                    tasks.map((task, index) => (
                        <li key={index} className="task-item">
                            {task}
                            <span
                                className="delete-icon"
                                onClick={() => handleDeleteTask(index)}
                            >
                                &#x1F5D1;
                            </span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;
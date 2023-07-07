import React from 'react';

const TaskList = ({ tasks, handleTaskClick }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? 'completed' : ''}`}
          onClick={() => handleTaskClick(task.id)}
        >
        <input
            type="checkbox"
            checked={task.completed}
            readOnly
            className="task-checkbox"
        />
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

//renders list

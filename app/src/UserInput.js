import React from 'react';

const UserInput = ({ inputValue, handleInputChange, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task"
        className="user-input"
      />
      <button type="submit" className="add-task-btn">
        Add Task
      </button>
    </form>
  );
};

export default UserInput;

//allows user to input task

import React, { useState, useEffect } from 'react';
import UserInput from './UserInput';
import TaskList from './TaskList';
import ViewFilter from './ViewFilter';
import './App.css'
//imports all components into app to be rendered together

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');  //stores tasks in localStorage 
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);
    
      const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
          const newTask = {
            id: Date.now(),
            title: inputValue,
            completed: false,
          };
          setTasks([...tasks, newTask]);
          setInputValue('');
        }
      };
      const handleTaskClick = (taskId) => {
        const updatedTasks = tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        setTasks(updatedTasks);
      };
    
      const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
      };
    
      const filteredTasks = filterTasks(tasks, filter);
    
      return (
        <div className="container d-flex justify-content-center">
            <div className="todo-app">
            <h2 className="header">To Do List</h2>
            <UserInput
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            <ViewFilter
                filter={filter}
                handleFilterChange={handleFilterChange}
            />
            <TaskList
                tasks={filteredTasks}
                handleTaskClick={handleTaskClick}
            />
            </div>
        </div>
      );
    };
    
    const filterTasks = (tasks, filter) => {
      switch (filter) {
        case 'active':
          return tasks.filter((task) => !task.completed);
        case 'completed':
          return tasks.filter((task) => task.completed);
        default:
          return tasks;
      }
    };
    
    export default App;
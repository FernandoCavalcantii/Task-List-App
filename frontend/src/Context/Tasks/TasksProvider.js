import React, { useState } from 'react';
import TasksContext from './TasksContext';

const TasksProvider = ({ children }) => {
  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState([]);
  const value = {
    display,
    setDisplay,
    history,
    setHistory,
  };
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default TasksProvider;

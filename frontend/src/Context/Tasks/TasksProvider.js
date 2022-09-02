import React, { useState } from 'react';
import TasksContext from './TasksContext';

const TasksProvider = ({ children }) => {
  const [display, setDisplay] = useState([]);
  const value = {
    display,
    setDisplay,
  };
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default TasksProvider;

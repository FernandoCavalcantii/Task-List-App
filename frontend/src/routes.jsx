import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Tasks from './Pages/Tasks';
import LoginProvider from './Context/Login/LoginProvider';
import TasksProvider from './Context/Tasks/TasksProvider';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <LoginProvider>
        <Route exact path="/" component={ Login }/>
        <TasksProvider>
          <Route exact path="/tasks" component={ Tasks }/>
        </TasksProvider>
      </LoginProvider>
    </Switch>
  </BrowserRouter>
);

export default Routes;

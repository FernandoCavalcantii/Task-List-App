import TasksController from '../controllers/tasks.controller';
import UsersController from '../controllers/users.controller';
import TasksModel from '../repository/Tasks.model';
import UsersModel from '../repository/Users.model';
import TasksService from '../services/tasks.service';
import UsersService from '../services/users.service';

class Factory {
  tasksFactory = (): TasksController => {
    const model = new TasksModel();
    const service = new TasksService(model);
    const controller = new TasksController(service);

    return controller;
  }

  usersFactory = (): UsersController => {
    const model = new UsersModel();
    const service = new UsersService(model);
    const controller = new UsersController(service);

    return controller;
  }
}

export default Factory;
import TasksController from '../controllers/tasks.controller';
import TasksModel from '../repository/Repository';
import TasksService from '../services/tasks.service';

class Factory {
    tasksFactory = (): TasksController => {
        const model = new TasksModel();
        const service = new TasksService(model);
        const controller = new TasksController(service);

        return controller;
    }
}

export default Factory;
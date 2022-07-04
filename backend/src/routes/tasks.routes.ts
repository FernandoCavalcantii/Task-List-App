import { Router } from 'express';
import Factory from '../factory/Factory';
import Token from '../middlewares/Token';

const tasksRouter = Router();
const tasksController = new Factory();
const token = new Token();

const tasks = '/tasks';
const tasksSlashId = '/tasks/:id';

tasksRouter.post(tasks, token.authToken, (req, res, next) => {
    tasksController.tasksFactory().createTask(req, res, next);
});

tasksRouter.get(tasksSlashId, token.authToken, (req, res, next) => {
    tasksController.tasksFactory().readTaskByPk(req, res, next);
});

tasksRouter.get(tasks, token.authToken, (req, res, next) => {
    tasksController.tasksFactory().readTasks(req, res, next);
});


tasksRouter.put(tasksSlashId, token.authToken, (req, res, next) => {
    tasksController.tasksFactory().updateTask(req, res, next);
});

tasksRouter.delete(tasksSlashId, token.authToken, (req, res, next) => {
    tasksController.tasksFactory().deleteTask(req, res, next);
});

export default tasksRouter;
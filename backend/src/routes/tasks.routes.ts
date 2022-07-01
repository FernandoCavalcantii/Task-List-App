import { Router } from 'express';
import Factory from '../factory/Factory';

const tasksRouter = Router();

const tasksController = new Factory();

const tasks = '/tasks';
const tasksSlashId = '/tasks/:id';

tasksRouter.post(tasks, (req, res, next) => {
    tasksController.tasksFactory().createTask(req, res, next);
});

tasksRouter.patch(tasksSlashId, (req, res, next) => {
    tasksController.tasksFactory().updateTask(req, res, next);
});

tasksRouter.delete(tasksSlashId, (req, res, next) => {
    tasksController.tasksFactory().deleteTask(req, res, next);
});

export default tasksRouter;
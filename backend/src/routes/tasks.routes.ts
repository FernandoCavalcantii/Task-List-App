import { Router } from 'express';
import Factory from '../factory/Factory';

const tasksRouter = Router();

const tasksController = new Factory();

const tasks = '/tasks';
// const tasksSlashId = '/tasks/:id';

tasksRouter.patch(tasks, (req, res, next) => {
    tasksController.tasksFactory().updateTask(req, res, next);
});

export default tasksRouter;
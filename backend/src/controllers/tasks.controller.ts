import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ITasksController, ITasksService } from '../protocols/interfaces';

class TasksController implements ITasksController {
  tasksService: ITasksService;

  constructor(service: ITasksService) {
    this.tasksService = service;
  }

  async createTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body } = req;
      const newTask = await this.tasksService.createTask(body);
      res.status(StatusCodes.CREATED).json(newTask);
    } catch (err) {
      next(err);
    }
  }

  async readTaskByPk(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { params: { id } } = req;
      const task = await this.tasksService.readTaskByPk(id);
      res.status(StatusCodes.OK).json(task);
    } catch (err) {
      next(err);
    }
  }

  async readTasks(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tasks = await this.tasksService.readTasks();
      res.status(StatusCodes.OK).json(tasks);
    } catch (err) {
      next(err);
    }
  }

  async updateTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body, params: { id } } = req;
      const updatedTask = await this.tasksService.updateTask(body, id);
      res.status(StatusCodes.OK).send('Task updated successfully');
    } catch (err) {
      next(err);
    }
  }

  async deleteTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { params: { id } } = req;
      await this.tasksService.deleteTask(id);
      res.status(StatusCodes.OK).send('Task deleted successfully');
    } catch (err) {
      next(err);
    }
  }
}

export default TasksController;
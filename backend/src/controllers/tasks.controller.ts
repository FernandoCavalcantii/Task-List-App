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

  async updateTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body, params: { id } } = req;
      const updatedTask = this.tasksService.updateTask(body, id);
      res.status(StatusCodes.OK).json(updatedTask);
    } catch (err) {
      next(err);
    }
  }

  async deleteTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { params: { id } } = req;
      await this.tasksService.deleteTask(id);
      res.status(StatusCodes.OK).send('Task deleted successfully')
    } catch (err) {
      next(err);
    }
  }
}

export default TasksController;
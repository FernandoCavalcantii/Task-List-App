import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ITasksController, ITasksService } from '../protocols/interfaces';

class TasksController implements ITasksController {
  tasksService: ITasksService;

  constructor(service: ITasksService) {
    this.tasksService = service;
  }

  async updateTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body, params: { id } } = req;
      const updatedTask = this.tasksService.updateTask(body, id);
      res.status(StatusCodes.CREATED).json(updatedTask);
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
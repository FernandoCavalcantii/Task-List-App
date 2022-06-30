import { Response, Request, NextFunction } from 'express';
import Service from '../services/tasks.service';
import Repository from '../repository/Repository';
import { StatusCodes } from 'http-status-codes';

const Controller = new Service(new Repository());

const controller = (req: Request, res: Response, _next: NextFunction) => {
  const { body } = req;
  const result = Controller.updateTask(body);
  return res.status(StatusCodes.CREATED).json(result);
}

export default controller;
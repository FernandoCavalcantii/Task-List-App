import { Request, Response, NextFunction } from "express";

export interface Task {
  id: number;
  name: string;
  description: string;
  status: string;
}

export interface ITasksModel {
  createTask(data: Omit<Task, 'id'>): Promise<Task>;
  readTaskByPk(id: number): Promise<Task | null>;
  readTasks(): Promise<Task[]>;
  updateTask(data: Task, id: string): Promise<any>;
  deleteTask(id: number): Promise<number>;
}

export interface ITasksService {
  tasksModel: ITasksModel;
  createTask(data: Omit<Task, 'id'>): Promise<Task>;
  readTaskByPk(id: number): Promise<Task | null>;
  readTasks(): Promise<Task[]>;
  updateTask(data: Task, id: string): Promise<void>;
  deleteTask(id: number): Promise<void>;
}

export interface ITasksController {
  tasksService: ITasksService
  // createTask(req: Request, res: Response, next: NextFunction): Promise<void>
  // readTaskByPk(req: Request, res: Response, next: NextFunction): Promise<void>
  // readTasks(req: Request, res: Response, next: NextFunction): Promise<void>
  updateTask(req: Request, res: Response, next: NextFunction): Promise<void>
  // deleteTask(req: Request, res: Response, next: NextFunction): Promise<void>
}
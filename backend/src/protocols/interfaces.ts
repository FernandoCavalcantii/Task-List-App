import { Request, Response, NextFunction } from "express";

export interface Task {
  id: number,
  name: string,
  description: string,
  status: string,
}

export interface ITasksModel {
  createTask(data: Omit<Task, 'id'>): Promise<Task>
  readTaskByPk(id: string): Promise<Task | null>
  readTasks(): Promise<Task[]>
  updateTask(data: Omit<Task, 'id'>, id: string): Promise<any>
  deleteTask(id: string): Promise<number>
}

export interface ITasksService {
  tasksModel: ITasksModel
  createTask(data: Omit<Task, 'id'>): Promise<Task>
  readTaskByPk(id: string): Promise<Task>
  readTasks(): Promise<Task[]>
  updateTask(data: Omit<Task, 'id'>, id: string): Promise<void>
  deleteTask(id: string): Promise<void>
}

export interface ITasksController {
  tasksService: ITasksService
  createTask(req: Request, res: Response, next: NextFunction): Promise<void>
  readTaskByPk(req: Request, res: Response, next: NextFunction): Promise<void>
  readTasks(req: Request, res: Response, next: NextFunction): Promise<void>
  updateTask(req: Request, res: Response, next: NextFunction): Promise<void>
  deleteTask(req: Request, res: Response, next: NextFunction): Promise<void>
}

export interface User {
  id: number,
  name: string,
  password: string,
}

export interface Admin {
  id: number,
  name: string,
  password: string,
  admin: boolean,
}

export interface IUsersModel {
  createAdmin(data: Omit<User, 'id'>): Promise<Admin>
  createUser(data: Omit<User, 'id'>): Promise<User>
  readUserByPk(id: string): Promise<User | null>
  readUsers(): Promise<User[]>
  updateAdmin(id: string): Promise<number>
  updateUser(data: Omit<User, 'id'>, id: string): Promise<boolean>
  deleteUser(id: string): Promise<number>
}
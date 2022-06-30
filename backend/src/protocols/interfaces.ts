export interface Task {
  id: number;
  name: string;
  description: string;
  status: string;
}

export interface IModel {
  createTask(data: Omit<Task, 'id'>): Promise<Task>;
  readTaskByPk(id: number): Promise<Task | null>;
  readTasks(): Promise<Task[]>;
  updateTask(data: Task): Promise<void>;
  deleteTask(id: number): Promise<void>;
}
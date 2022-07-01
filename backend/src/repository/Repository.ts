import Model from '../database/models/Task';
import { Task, ITasksModel } from '../protocols/interfaces';

export default class Repository implements ITasksModel {
  constructor(private model = Model) {
    this.model = model
  }

  async createTask(data: Omit<Task, 'id'>): Promise<Task> {
    const task = await this.model.create(data);
    return task;
  }

  async readTaskByPk(id: number): Promise<Task | null> {
    const task = await this.model.findByPk(id);
    return task;
  }

  async readTasks(): Promise<Task[]> {
    const tasks = await this.model.findAll();
    return tasks;
  }

  async updateTask(data: Task, id: string) {
    const { name, description, status } = data;
    const updateResult = await this.model.update({ name, description, status }, { where: { id } });
    return updateResult;
  }

  async deleteTask(id: number): Promise<number> {
    const deleteResult = await this.model.destroy({ where: { id } });
    return deleteResult;
  }
}
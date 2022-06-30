import Model from '../database/models/Task';
import { Task, IModel } from '../protocols/interfaces';

export default class Repository implements IModel {
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

  async updateTask(data: Task): Promise<void> {
    const { id, name, description, status } = data;
    await this.model.update({ name, description, status }, { where: { id } });
  }

  async deleteTask(id: number): Promise<void> {
    await this.model.destroy({ where: { id } });
  }
}
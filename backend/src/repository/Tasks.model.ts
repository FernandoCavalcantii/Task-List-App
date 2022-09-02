import Model from '../database/models/Task';
import { Task, ITasksModel } from '../protocols/interfaces';

class TasksModel implements ITasksModel {
  constructor(private model = Model) {
    this.model = model
  }

  async createTask(data: Omit<Task, 'id'>): Promise<Task> {
    const { id } = await this.model.create(data);
    return { id, ...data }
  }

  async readTaskByPk(id: string): Promise<Task | null> {
    const task = await this.model.findByPk(id);
    return task;
  }

  async readTasks(): Promise<Task[]> {
    const tasks = await this.model.findAll();
    return tasks;
  }

  async updateTask(data: Omit<Task, 'id'>, id: string) {
    const { name, description, status } = data;
    const updateResult = await this.model.update({ name, description, status }, { where: { id } });
    return updateResult;
  }

  async deleteTask(id: string): Promise<number> {
    const deleteResult = await this.model.destroy({ where: { id } });
    return deleteResult;
  }
}

export default TasksModel;
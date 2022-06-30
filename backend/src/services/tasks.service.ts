import { StatusCodes } from 'http-status-codes';
import ErrorObj from '../helpers/ErrorObj';
import { IModel, IService, Task } from '../protocols/interfaces';

class Service implements IService {
  constructor(private model: IModel) {
    this.model = model
  }

  createTask(data: Omit<Task, 'id'>): Promise<Task> {
    const { name, description, status } = data;

    if (name.length < 4) {
      throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Name must have at least 4 characters');
    }

    if (description.length < 8) {
      throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Description must have at least 8 characters');
    }

    if (status !== 'Done' && status !== 'In progress' && status !== 'Stopped') {
      throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Status must be "Done", "In progress" or "Stopped"');
    }

    const task = this.model.createTask(data);
    return task;
  }

  async readTasks(): Promise<Task[]> {
    const tasks = await this.model.readTasks();
    return tasks;
  }

  async readTaskByPk(id: number): Promise<Task | null> {
    const task = await this.model.readTaskByPk(id);
    if (!task) throw new ErrorObj(StatusCodes.NOT_FOUND, 'Task id not found');
    return task;
  }

  async updateTask(data: Task): Promise<void> {
    const updatedTask = await this.model.updateTask(data);
    console.log(updatedTask);
  }

  async deleteTask(id: number): Promise<void> {
    const deletedTask = await this.model.deleteTask(id);
  }
}

export default Service;

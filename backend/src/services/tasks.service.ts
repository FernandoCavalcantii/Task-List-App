import { StatusCodes } from 'http-status-codes';
import ErrorObj from '../helpers/ErrorObj';
import { ITasksModel, ITasksService, Task } from '../protocols/interfaces';
import patchValidation from '../validations/patchValidation';

class Service implements ITasksService {
  tasksModel: ITasksModel;

  constructor(model: ITasksModel) {
    this.tasksModel = model;
  }

  async createTask(data: Omit<Task, 'id'>): Promise<Task> {
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

    const newTask = await this.tasksModel.createTask(data);
    return newTask;
  }

  async readTasks(): Promise<Task[]> {
    const tasks = await this.tasksModel.readTasks();
    return tasks;
  }

  async readTaskByPk(id: string): Promise<Task> {
    const task = await this.tasksModel.readTaskByPk(id);
    if (task === null) throw new ErrorObj(StatusCodes.NOT_FOUND, 'Task id not found');
    return task;
  }

  async updateTask(data: Omit<Task, 'id'>, id: string): Promise<void> {
    const { name, description, status } = data;
    patchValidation(name, description, status);
    const updatedTask = await this.tasksModel.updateTask(data, id);
    const [fail] = updatedTask;
    if (!fail) throw new ErrorObj(StatusCodes.NOT_FOUND, 'Task id not found');
  }

  async deleteTask(id: string): Promise<void> {
    const deletedTask = await this.tasksModel.deleteTask(id);
    if (!deletedTask) throw new ErrorObj(StatusCodes.NOT_FOUND, 'Task id not found');
  }
}

export default Service;

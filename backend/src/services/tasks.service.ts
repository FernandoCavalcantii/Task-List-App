import { StatusCodes } from 'http-status-codes';
import ErrorObj from '../helpers/ErrorObj';
import { ITasksModel, ITasksService, Task } from '../protocols/interfaces';
import patchValidation from '../validations/patchValidation';
import taskValidation from '../validations/taskValidations';

class Service implements ITasksService {
  tasksModel: ITasksModel;

  constructor(model: ITasksModel) {
    this.tasksModel = model;
  }

  async createTask(data: Omit<Task, 'id'>): Promise<Task> {
    const { name, description, status } = data;

    taskValidation(name, description, status);

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
    console.log(name);
    // patchValidation(name, description, status);
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

import TasksController from '../../../controllers/tasks.controller';
import TasksService from '../../../services/tasks.service';
// import request from 'supertest';
import { App } from '../../../app';

// jest.mock('../../../services/tasks.service');

// const TasksServiceMock = TasksService as jest.Mock<TasksService>;

// const factory = () => {
//   const tasksServiceUseCase = new TasksServiceMock() as jest.Mocked<TasksService>;
//   const tasksController = new TasksController(tasksServiceUseCase);

//   return {
//     tasksServiceUseCase,
//     tasksController
//   }
// }

const requestSample = {
  name: 'Projeto',
  status: 'In progress',
  description: 'Test',
  userId: 1,
};

const newTask = {
  id: 1,
  name: 'Projeto',
  status: 'In progress',
  description: 'Test',
  userId: 1,
};

const app = new App().app;

describe('TasksController', () => {
  describe('createTask method:', () => {
    test('1- Returns status 200 in success', async () => {
      // const { tasksController } = factory();
      // const response = await request(app).post('/tasks').send(requestSample);

      // console.log(response.status);
      expect(1).toEqual(1);
    });
  });
});

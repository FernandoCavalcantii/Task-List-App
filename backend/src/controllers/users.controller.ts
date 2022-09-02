import { Response, NextFunction, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUsersController, IUsersService } from '../protocols/interfaces';

class UsersController implements IUsersController {
  usersService: IUsersService;

  constructor(service: IUsersService) {
    this.usersService = service;
  }

  async createAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body } = req;
      const newAdmin = await this.usersService.createAdmin(body);
      res.status(StatusCodes.CREATED).json(newAdmin);
    } catch (err) {
      next(err);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body } = req;
      const newUser = await this.usersService.createUser(body);
      res.status(StatusCodes.CREATED).json(newUser);
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body } = req;
      const newUser = await this.usersService.createUser(body);
      res.status(StatusCodes.CREATED).json(newUser);
    } catch (err) {
      next(err);
    }
  }

  async readUserByPk(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { params: { id } } = req;
      const user = await this.usersService.readUserByPk(id);
      res.status(StatusCodes.OK).json(user);
    } catch (err) {
      next(err);
    }
  }

  async readUsers(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.usersService.readUsers();
      res.status(StatusCodes.OK).json(users);
    } catch (err) {
      next(err);
    }
  }

  async updateAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { params: { id } } = req;
      await this.usersService.updateAdmin(id);
      res.status(StatusCodes.OK).send('User updated to Admin successfully');
    } catch (err) {
      next(err);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body, params: { id } } = req;
      await this.usersService.updateUser(body, id);
      res.status(StatusCodes.OK).send('User updated successfully');
    } catch (err) {
      next(err);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { params: { id } } = req;
      await this.usersService.deleteUser(id);
      res.status(StatusCodes.OK).send('User deleted successfully');
    } catch (err) {
      next(err);
    }
  }
}

export default UsersController;
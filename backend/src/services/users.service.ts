import { StatusCodes } from 'http-status-codes';
import ErrorObj from '../helpers/ErrorObj';
import { Admin, IUsersModel, IUsersService, User } from '../protocols/interfaces';
import { nameValidation, passwordValidation, userValidation } from '../validations/userValidations';
// import patchValidation from '../validations/patchValidation';

class UsersService implements IUsersService {
  usersModel: IUsersModel;

  constructor(model: IUsersModel) {
    this.usersModel = model;
  }

  async createAdmin(data: Omit<User, 'id'>): Promise<Admin> {
    const { name, password } = data;

    userValidation(name, password);

    const newAdmin = await this.usersModel.createAdmin(data);
    return newAdmin;
  }

  async createUser(data: Omit<User, 'id'>): Promise<User> {
    const { name, password } = data;

    userValidation(name, password);

    const newUser = await this.usersModel.createUser(data);
    return newUser;
  }

  async readUserByPk(id: string): Promise<User> {
    const user = await this.usersModel.readUserByPk(id);
    if (user === null) throw new ErrorObj(StatusCodes.NOT_FOUND, 'User id not found');
    return user;
  }

  async readUsers(): Promise<User[]> {
    const users = await this.usersModel.readUsers();
    return users;
  }


  async updateAdmin(id: string): Promise<void> {
    const updateResult = await this.usersModel.updateAdmin(id);
    if (!updateResult) throw new ErrorObj(StatusCodes.NOT_FOUND, 'User id not found');
  }

  async updateUser(data: Omit<User, 'id'>, id: string): Promise<void> {
    const { name, password } = data;

    nameValidation(name);
    passwordValidation(password);

    if (name === undefined && password === undefined) {
      throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Both fields cannot be empty');
    }

    const updatedUser = await this.usersModel.updateUser(data, id);
    if (!updatedUser) throw new ErrorObj(StatusCodes.NOT_FOUND, 'User id not found');
  }

  async deleteUser(id: string): Promise<void> {
    const deletedUser = await this.usersModel.deleteUser(id);
    if (!deletedUser) throw new ErrorObj(StatusCodes.NOT_FOUND, 'User id not found');
  }
}

export default UsersService;

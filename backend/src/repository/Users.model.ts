import Model from '../database/models/User';
import { User, IUsersModel, Admin } from '../protocols/interfaces';

class UsersModel implements IUsersModel {
  constructor(private model = Model) {
    this.model = model
  }

  async createAdmin(data: Omit<User, 'id'>): Promise<Admin> {
    const newAdmin = { ...data, admin: true };
    const { id } = await this.model.create(newAdmin);
    return { id, ...newAdmin };
  }

  async createUser(data: Omit<User, 'id'>): Promise<User> {
    const newUser = { ...data, admin: false };
    const { id } = await this.model.create(newUser);
    return { id, ...data };
  }

  async readUserByPk(id: string): Promise<User | null> {
    const user = await this.model.findByPk(id);
    return user;
  }

  async readUserByName(name: string): Promise<Admin | null> {
    const user = await this.model.findOne({ where: { name } });
    return user;
  }

  async readUsers(): Promise<User[]> {
    const tasks = await this.model.findAll();
    return tasks;
  }

  async updateAdmin(id: string): Promise<number> {
    const [result] = await this.model.update({ admin: true }, { where: { id } });
    return result;
  }

  async updateUser(data: Omit<User, 'id'>, id: string): Promise<boolean> {
    const { name, password } = data;

    if (name) {
      const [result] = await this.model.update({ name }, { where: { id } });
      if (result === 0) return false;
    }

    if (password) {
      const [result] = await this.model.update({ password }, { where: { id } })
      if (result === 0) return false;
    }

    return true;
  }


  async deleteUser(id: string): Promise<number> {
    const deleteResult = await this.model.destroy({ where: { id } });
    return deleteResult;
  }
}

export default UsersModel;


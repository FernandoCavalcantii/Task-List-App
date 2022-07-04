import 'dotenv/config';
import { Response, NextFunction, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorObj from '../helpers/ErrorObj';
import { ILogin } from '../protocols/interfaces';
import UsersModel from '../repository/Users.model';

class Login implements ILogin {
  async loginValidation(req: Request, _res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, password } = req.body;
      const user = await new UsersModel().readUserByName(name);

      if (user?.password !== password) throw new ErrorObj(StatusCodes.FORBIDDEN, 'Incorrect name or password');

      if (user?.id) {
        req.user = {
          id: user.id,
          name: user.name,
          admin: user.admin
        }
      }

      next();
    } catch (err) {
      next(err);
    }
  }
}

export default Login;

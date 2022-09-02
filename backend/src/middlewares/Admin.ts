import { Response, NextFunction, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorObj from '../helpers/ErrorObj';
import { IAdmin } from '../protocols/interfaces';

class Admin implements IAdmin {
  async adminValidation(req: Request, _res: Response, next: NextFunction): Promise<void> {
    try {
      const { user } = req;

      if (user.admin === false) {
        throw new ErrorObj(StatusCodes.FORBIDDEN, 'Only an Administrator can create a new Admin');
      }

      next();
    } catch (err) {
      next(err);
    }
  }
}

export default Admin;
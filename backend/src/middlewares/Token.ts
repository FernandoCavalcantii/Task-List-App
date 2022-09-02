import 'dotenv/config';
import { Response, NextFunction, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorObj from '../helpers/ErrorObj';
import { IToken } from '../protocols/interfaces';
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

class Token implements IToken {
  async authToken(req: Request, _res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new ErrorObj(StatusCodes.UNAUTHORIZED, 'Token not found');
      }

      let decoded;

      try {
        decoded = jwt.verify(token, secret);
      } catch (err) {
        throw new ErrorObj(StatusCodes.UNAUTHORIZED, 'Expired or invalid token');
      }

      req.user = decoded.data;

      next();
    } catch (err) {
      next(err);
    }
  }

  async generateToken(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: req.user }, secret, jwtConfig);

    req.token = token;
    next();
  }
}

export default Token;

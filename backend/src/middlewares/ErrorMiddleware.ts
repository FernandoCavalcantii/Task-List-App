import { Response, Request, NextFunction } from 'express';
import ErrorObj from '../helpers/ErrorObj';

const errorMiddleware = (
  err: ErrorObj,
  _req: Request,
  res: Response,
  next: NextFunction,
): void => {
  console.error(
    `---- Error ----
    Code: ${err.code}
    message: ${err.message}`,
  );

  res.status(err.code).json({ message: err.message });

  next();
};

export default errorMiddleware;
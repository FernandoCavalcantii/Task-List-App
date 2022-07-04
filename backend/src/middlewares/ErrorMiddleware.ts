import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorObj from '../helpers/ErrorObj';

const errorMiddleware = (
  err: ErrorObj,
  _req: Request,
  res: Response,
  next: NextFunction,
): void => {

  if (err.code) {
    console.error(
      `---- Error ----
      Code: ${err.code}
      message: ${err.message}`,
    );

    res.status(err.code).json({ message: err.message });
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server encountered an unexpected error. We are working on it!' });
    console.log(err);
  }

  next();
};

export default errorMiddleware;
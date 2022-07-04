import { StatusCodes } from "http-status-codes";
import ErrorObj from "../helpers/ErrorObj";

const nameValidation = (name: string) => {
  if (!name) throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Field "name" is required');

  if (name.length < 4) {
    throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Name must have at least 4 characters');
  }
}

const passwordValidation = (password: string) => {
  if (!password) throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Field "password" is required');

  if (password.length < 8) {
    throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Password must have at least 8 characters');
  }
}

export { nameValidation, passwordValidation }
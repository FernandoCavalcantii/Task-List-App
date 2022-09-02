import { StatusCodes } from "http-status-codes";
import ErrorObj from "../helpers/ErrorObj";

const taskValidation = (name: string, description: string, status: string) => {
  if (!name) throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Field "name" is required');

  if (name.length < 4) throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Name must have at least 4 characters');

  if (!description) throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Field "description" is required');

  if (description.length < 8) {
    throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Description must have at least 8 characters');
  }

  if (!status) throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Field "status" is required');

  if (status !== 'Done' && status !== 'In progress' && status !== 'Stopped') {
    throw new ErrorObj(StatusCodes.BAD_REQUEST, 'Status must be "Done", "In progress" or "Stopped"');
  }
}

export default taskValidation;
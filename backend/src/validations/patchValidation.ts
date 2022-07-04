// import { StatusCodes } from "http-status-codes";
// import ErrorObj from "../helpers/ErrorObj";

// const patchValidation = (name: string | undefined, description: string | undefined, status: string | undefined) => {
//   const validPatch = [name, description, status].indexOf(undefined);
//   if (validPatch === -1) throw new ErrorObj(StatusCodes.BAD_REQUEST, "Can't change all Task properties through here");
// }

// export default patchValidation;
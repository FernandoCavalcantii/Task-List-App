import { Router } from 'express';
import Factory from '../factory/Factory';
import Admin from '../middlewares/Admin';
import Token from '../middlewares/Token';


const usersRouter = Router();
const usersController = new Factory();
const token = new Token();
const admin = new Admin();

const adminPath = '/admin';
const adminSlashId = '/admin/:id';
const usersPath = '/users';
const usersSlashId = '/users/:id';

usersRouter.post(adminPath, token.authToken, admin.adminValidation, (req, res, next) => {
  usersController.usersFactory().createAdmin(req, res, next);
});

usersRouter.post(usersPath, (req, res, next) => {
  usersController.usersFactory().createUser(req, res, next);
});

usersRouter.get(usersSlashId, token.authToken, (req, res, next) => {
  usersController.usersFactory().readUserByPk(req, res, next);
});

usersRouter.get(usersPath, token.authToken, (req, res, next) => {
  usersController.usersFactory().readUsers(req, res, next);
});

usersRouter.patch(adminSlashId, admin.adminValidation, (req, res, next) => {
  usersController.usersFactory().updateAdmin(req, res, next);
});

usersRouter.put(usersSlashId, token.authToken, (req, res, next) => {

  usersController.usersFactory().updateUser(req, res, next);
});

usersRouter.delete(usersSlashId, token.authToken, (req, res, next) => {
  usersController.usersFactory().deleteUser(req, res, next);
});

export default usersRouter;
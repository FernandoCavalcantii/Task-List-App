import { Router } from 'express';
import Factory from '../factory/Factory';

const usersRouter = Router();

const usersController = new Factory();

const admin = '/admin';
const users = '/users';
const usersSlashId = '/users/:id';

usersRouter.post(admin, (req, res, next) => {
  usersController.usersFactory().createAdmin(req, res, next);
});

usersRouter.post(users, (req, res, next) => {
  usersController.usersFactory().createUser(req, res, next);
});

usersRouter.get(usersSlashId, (req, res, next) => {
  usersController.usersFactory().readUserByPk(req, res, next);
});

usersRouter.get(users, (req, res, next) => {
  usersController.usersFactory().readUsers(req, res, next);
});


usersRouter.patch(usersSlashId, (req, res, next) => {
  usersController.usersFactory().updateUser(req, res, next);
});

usersRouter.delete(usersSlashId, (req, res, next) => {
  usersController.usersFactory().deleteUser(req, res, next);
});

export default usersRouter;
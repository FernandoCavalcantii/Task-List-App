import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import Login from '../middlewares/Login';
import Token from '../middlewares/Token';

const loginRouter = Router();
const login = new Login();
const token = new Token();

const loginPath = '/login';


loginRouter.post(loginPath, login.loginValidation, token.generateToken, (req, res, _next) => {
    const { token } = req;
    res.status(StatusCodes.OK).json({ token });
})

export default loginRouter;
import cors = require('cors');

import * as express from 'express';
import errorMiddleware from './middlewares/ErrorMiddleware';
import loginRouter from './routes/login.routes';
import tasksRouter from './routes/tasks.routes';
import usersRouter from './routes/users.routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(cors);
    this.app.use(accessControl);
    this.app.use(tasksRouter);
    this.app.use(usersRouter);
    this.app.use(loginRouter);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log('Server is running on port:', PORT));
  }
}

export { App };

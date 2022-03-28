import * as express from 'express';
import { clubController, clubId } from './Controllers/clubController';
import { loginController, roleController } from './Controllers/loginController';
import { matchController, matchFinish, matchPost } from './Controllers/matchController';

class App {
  public app: express.Express;
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    // ...
  }

  // ...
  public start(PORT: string | number):void {
    this.app.use(express.json());

    this.app.post('/login', loginController);
    this.app.get('/login/validate', roleController);

    this.app.get('/clubs', clubController);
    this.app.get('/clubs/:id', clubId);

    this.app.get('/matchs', matchController);
    this.app.post('/matchs', matchPost);
    this.app.patch('/matchs/:id/finish', matchFinish);

    this.app.listen(PORT, () => {
      console.log(`PORT ${PORT}`);
    });
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();

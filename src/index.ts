import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import Controller from '../src/interfaces/controller.interface';

export default class App {
    private app: express.Application = express();

    constructor(controllers: Controller[]) {
        this.app = express();
    
        this.initializePreMiddlewares()
        this.initializeControllers(controllers);
      }
    

    private initializePreMiddlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    
      }

      private initializeControllers(controllers) {
        controllers.forEach((controller) => {
          this.app.use('/', controller.router);
        });
      }
     
      public listen() {
        this.app.listen(3000, () => {
          console.log(`App listening on the port 3000`);
        });
      }
    
      public getServer() {
        return this.app;
      }

    









}
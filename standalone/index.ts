import 'reflect-metadata';
import express from 'express';
import { Container, attachControllers, ERROR_MIDDLEWARE } from '../src/server/express'
import { DataProvider } from './services';
import { ServerErrorMiddleware } from './middlewares/serverError.middlware';
import { Controllers } from './contollers';
const app: express.Express = express();

class AppServer {
 PORT:number = 3000;
 
 private constructor(app: express.Express) {
  this.LoadConfig()
  this.InitializeControllers()
 }
 private LoadConfig() {
   
 }
 private async InitializeControllers() {
  await attachControllers(app, [...Controllers]);
 }
  private static async start() {
    Container.provide([
      { provide: DataProvider, useClass: DataProvider },
      { provide: ERROR_MIDDLEWARE, useClass: ServerErrorMiddleware },
    ]);  

    app.listen(this.prototype.PORT, () => {
      console.info('StandAlone Express Server is running on port 3000');
    });
  }
  static async run() {    
    AppServer.start().catch(console.error);
  }
}

AppServer.run()

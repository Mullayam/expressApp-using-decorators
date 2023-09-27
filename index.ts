import 'reflect-metadata'
import * as express from 'express';

import { Container, attachControllers, ERROR_MIDDLEWARE, } from './src/app';
import { DataProvider } from './src/services';
import { Middleware } from './src/middlewares';
import { Controllers } from './src/contollers';

const app: express.Express = express();



export async function start() {
  Container.provide([
    { provide: DataProvider, useClass: DataProvider },
    { provide: ERROR_MIDDLEWARE, useClass: Middleware },
  ]);

  await attachControllers(app, [...Controllers]);

  app.listen(3000, () => {
    console.info('Server is running on port 3000');
  });
}

start().catch(console.error);

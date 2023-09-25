import { Injectable } from "../../src/common"; 
import { Request, Response, NextFunction } from "express";
import { DataProvider } from "../services";
import { ErrorMiddleware } from '../../src/server/express'
import { InternalServerError, NotFoundError } from "../../src";

@Injectable()
export class ServerErrorMiddleware implements ErrorMiddleware {

  constructor(private dataProvider: DataProvider) { }

  use(error: Error, _request: Request, response: Response, next: NextFunction) {
    console.log(this.dataProvider.data());

    if (error instanceof NotFoundError) {
      return response.send('Not Found Error');
    }

    if (error instanceof InternalServerError) {
      return response.send('Internal Server Error');
    }

    next(error);
  }
}

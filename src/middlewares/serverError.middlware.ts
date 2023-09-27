import { Injectable } from "../common";
import { Request, Response, NextFunction } from "express"; 
import { ErrorMiddleware } from '../app'
 
@Injectable()
export class Middleware implements ErrorMiddleware {

  constructor() {}

  use(error: Error, _request: Request, response: Response, next: NextFunction) {
    console.log("Middleware Called");

    next(error);
  }
}

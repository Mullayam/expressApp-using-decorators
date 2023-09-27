import { Injectable } from "../common";
import { Request, Response, NextFunction } from "express";

import { } from "../app";

@Injectable()
export class Test  {
  constructor() {}
  use(error: Error, _request: Request, response: Response, next: NextFunction) {
    console.log("Middleware Called");

    next(error);
  }
}

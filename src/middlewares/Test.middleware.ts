import { Injectable } from "src/modules/common";
import { Request, Response, NextFunction } from "express"
import { Middleware} from "src/modules/app";

@Injectable() 
export class Test implements Middleware {
  constructor() {}
  use(_request: Request, response: Response, next: NextFunction) {
    console.log("Middleware Called");
    next();
  }
}

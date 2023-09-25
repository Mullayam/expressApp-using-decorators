import { Request, Response, NextFunction } from "express";
import { Injectable } from "../../src/common";
import { Middleware } from "../../src/server/express";
 
@Injectable()
export class RequestMiddleware implements Middleware {
    constructor() {}

    use(_request: Request, _response: Response, next: NextFunction) {
        console.log('RequestMiddleware');
        next();
    }
}
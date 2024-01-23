import Helpers from "@/utils/helpers";
import { Request, Response, NextFunction } from "express";

export default class AppMiddleware {

  //  check api key from frontend is valid or not
  public static isApiProtected(req: Request, res: Response, next: NextFunction) {
    try {       
      const headers = req.headers;
      const apiKey = headers["api_key"] || undefined;
      if (typeof apiKey === "undefined") {
        return res.status(404).json({
          success: false,
          result: {
            code: 404
          },
          message: "API_KEY is Required",
        });
      }
      if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({
          success: false,
          status_code: {
            code: 412
          },
          message: "Invalid KEY, Check API KEY",
        });
      }
      next();
    } catch (error: any) {
      res.send({
        success: false,
        result: null,
        message: error.message,
      });
      res.end();
    }

  }
    
}
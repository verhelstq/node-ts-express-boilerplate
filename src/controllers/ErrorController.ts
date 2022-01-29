import { formatISO } from "date-fns";
import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/HttpException";


export const HandleError = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  return res.status(error.status).json({
    status: error.status,
    message: error.message,
    request: {
      method: req.method,
      host: req.hostname,
      path: req.path,
      cookies: req.cookies,
      body: req.body
    },

    timestamp: formatISO(Date.now())
  })
}
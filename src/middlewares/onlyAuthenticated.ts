import { Request, Response, NextFunction} from 'express';
import { HttpException } from '../exceptions/HttpException';

const onlyAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if(!res.locals.Authenticated){
    return next(new HttpException(403, "Forbidden"))
  }

  next();
}

export default onlyAuthenticated;
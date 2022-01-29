import { Request, Response, NextFunction} from 'express';
import { HttpException } from '../exceptions/HttpException';

const onlyAdmin = (req: Request, res: Response, next: NextFunction) => {
  if(['qGLCnMx2umMHHUsEQWJ47jdk0UR2'].includes(res.locals.UserId)){
    next()
  } else {
    return next(new HttpException(403, 'auth/admin-only'))
  }
}

export default onlyAdmin;
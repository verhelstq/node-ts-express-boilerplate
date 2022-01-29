import { Request, Response, NextFunction} from 'express';
import { HttpException } from '../exceptions/HttpException';
import { auth } from '../firebase';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['x-authentication-id'] as any;
  const isInternal = req.headers['x-internal-key'] === "watchjs";

  if(authHeader !== undefined && authHeader !== null){

    const idTokenResult = await auth().verifyIdToken(authHeader);

    res.locals.Authenticated = idTokenResult.provider_id !== "anonymous";
    res.locals.UserId = idTokenResult.uid;
    console.log(res.locals.UserId + ' --> ' + req.method  + ' - ' + req.url)
    next();
  } else if (isInternal){
    next();
  } else {
    next(new HttpException(403, "auth/unauthorized"));
  }
}

export default authMiddleware;
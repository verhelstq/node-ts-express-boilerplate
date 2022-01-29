import express, { NextFunction, Request, Response } from 'express';
import { db } from './db';
import { json, urlencoded } from 'body-parser';

import * as cors from 'cors';
import authMiddleware from './middlewares/auth';

import { HandleError } from './controllers/ErrorController';
import { HttpException } from './exceptions/HttpException';


const app = express();
const PORT = process.env.PORT as unknown as number || 3000;

// Middlewares
app.use(json());
app.use(urlencoded({extended: true}));
app.use(authMiddleware);
app.use(cors.default());


app.get('/api/health' , (req: Request, res: Response) => {
  return res.status(200).json({
    version: '0.6.0'
  });
})

app.use((req: Request, res: Response, next: NextFunction) => next(new HttpException(404, "not-found")));
app.use((error: HttpException, req: Request, res: Response, next: NextFunction) => {
  HandleError(error, req, res, next)
});

db.sync({alter: false}).then(() => {
  app.listen(PORT,  () => {
    console.log(`API running on port ${PORT}!`);
  });
}).catch(err =>{
    throw err;
})

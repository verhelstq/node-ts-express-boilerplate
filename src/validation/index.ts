import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { HttpException } from '../exceptions/HttpException';


import CommentValidationRules from './rules/CommentValidationRules';
import UserValidationRules from './rules/UserValidationRules';

const Validate = (req : Request, res : Response, next : NextFunction) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return next()
  }

  const extractedErrors = [] as object[]
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return next(new HttpException(422, extractedErrors.toString()))
}

export {
  Validate,
  CommentValidationRules,
  UserValidationRules
}
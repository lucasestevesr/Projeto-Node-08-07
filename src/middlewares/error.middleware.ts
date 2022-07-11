import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';
 
export const errorMiddleware = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
  const status =  500
  const message = 'Something went wrong' 
  console.log(message)
  response
    .status(status)
    .send({
      status,
      message,
    })
}
 
export default errorMiddleware;
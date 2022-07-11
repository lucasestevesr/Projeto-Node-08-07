import { Request, Response, NextFunction } from 'express';

export const userGet = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('qq coisa')
    return res.status(200)
  } catch (error) {
    return next(error)
  }
}

export default {
    userGet
}

import { Response, Request, NextFunction } from 'express';
import httpStatus from 'http-status-codes';
import jwt, { JsonWebTokenError, JwtPayload } from 'jsonwebtoken';

import { Context } from '../context';

const { JWT_SECRET } = Context.config.api;

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const accessToken = req.header('accessToken');
      if (accessToken) {
        const decoded = jwt.verify(accessToken, JWT_SECRET) as JwtPayload;
        const user = await Context.prisma.user.findFirst({
          where: { email: { equals: decoded.email, mode: 'insensitive' } },
          include: { artists: { orderBy: { rating: 'desc' } } },
        });
        if (user) {
          Context.user = user;
          next();
        } else {
          res.status(httpStatus.FORBIDDEN).send('User not found');
        }
      } else {
        res.status(httpStatus.FORBIDDEN).send('No accessToken provided');
      }
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        res.status(httpStatus.FORBIDDEN).send('Invalid accessToken provided');
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Unable to auth User: ' + error);
      }
    }
  };
};

export default auth;

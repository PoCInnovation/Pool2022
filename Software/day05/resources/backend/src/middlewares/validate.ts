import { z, ZodError } from 'zod';
import { Response, Request, NextFunction } from 'express';

import httpStatus from 'http-status-codes';

type Location = 'body' | 'query';

const validate = (schema: z.AnyZodObject, location: Location = 'body') => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      if (location === 'body') req.body = schema.parse(req.body);
      if (location === 'query') req.query = schema.parse(req.query);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(httpStatus.BAD_REQUEST).send('Invalid parameters: ' + error.message);
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Unable to validate ' + location + ': ' + error);
      }
    }
  };
};

export default validate;

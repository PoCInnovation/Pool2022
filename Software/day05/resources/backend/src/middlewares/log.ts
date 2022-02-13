import { Response, Request, NextFunction } from 'express';
import status from 'http-status';

import { v4 } from 'uuid';

import logger from '../logger';

const logMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now();
  const id = v4();
  const { method, url, ip } = req;

  if (res.locals.id) {
    return next();
  }

  res.locals.id = id;

  logger.info(`request [${id}] on [${method}] [${url}] from (${ip})`);

  res.on('finish', () => {
    const responseCode = res.statusCode;
    const elapsedTime = Date.now() - start;

    switch (status[`${responseCode}_CLASS`]) {
      case status.classes.CLIENT_ERROR || status.classes.REDIRECTION:
        logger.warn(
          `request [${id}] response in ${elapsedTime} ms with status ${responseCode} ${status[responseCode]}`,
        );
        break;
      case status.classes.SERVER_ERROR:
        logger.error(
          `request [${id}] response in ${elapsedTime} ms with status ${responseCode} ${status[responseCode]}`,
        );
        break;
      default:
        logger.info(
          `request [${id}] response in ${elapsedTime} ms with status ${responseCode} ${status[responseCode]}`,
        );
        break;
    }
  });

  return next();
};

export default logMiddleware;

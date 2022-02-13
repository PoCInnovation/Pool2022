import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import logger from './logger';
import Routes from './routes/index';
import { Context } from './context';
import logMiddleware from './middlewares/log';

const server = express();

const host = Context.config.api.API_HOST;
const port = Context.config.api.API_PORT;
const clientUrl = Context.config.api.CLIENT_URL;

server.use(bodyParser.json());
server.use(
  cors({
    origin: clientUrl,
  }),
);
server.use(logMiddleware);
server.use('/', Routes);

server.listen(port, host, () => {
  logger.info(`Backend day05 listening at http://${host}:${port}`);
});

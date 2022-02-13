import { Router } from 'express';
import httpStatus from 'http-status-codes';

import { Context } from '../context';

const router = Router();

router.get('/', (req, res) => {
  res.status(httpStatus.OK).send({ user: Context.user });
});

export default router;

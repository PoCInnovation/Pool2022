import { Router } from 'express';

import httpStatus from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  res.status(httpStatus.OK).send('Up');
});

export default router;

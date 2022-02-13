import { Router } from 'express';

import authMiddleware from '../middlewares/auth';

import HealthRouter from './health';
import AuthRouter from './auth';
import UserRouter from './user';
import ArtistRouter from './artist';

const router = Router();

router.use('/health', HealthRouter);
router.use('/auth', AuthRouter);
router.use('/user', authMiddleware(), UserRouter);
router.use('/artist', authMiddleware(), ArtistRouter);

export default router;

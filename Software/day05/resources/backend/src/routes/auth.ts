import { Router } from 'express';
import { Prisma } from '@prisma/client';
import httpStatus from 'http-status-codes';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { Context } from '../context';
import { LoginUserSchema, RegisterUserSchema } from '../schema/auth';
import validateMiddleware from '../middlewares/validate';

const router = Router();

const { JWT_SECRET } = Context.config.api;

router.post('/register', validateMiddleware(RegisterUserSchema), async (req, res) => {
  try {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await Context.prisma.user.create({
      data: {
        email: req.body.email,
        password: encryptedPassword,
      },
      include: { artists: true },
    });
    const accessToken = jwt.sign({ email: user.email, id: user.id }, JWT_SECRET);
    res.status(httpStatus.CREATED).send({ user, accessToken });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      res.status(httpStatus.CONFLICT).send('Email already used');
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Unable to create User: ' + error);
    }
  }
});

router.post('/login', validateMiddleware(LoginUserSchema), async (req, res) => {
  try {
    const user = await Context.prisma.user.findFirst({
      where: { email: { equals: req.body.email, mode: 'insensitive' } },
      include: { artists: { orderBy: { rating: 'desc' } } },
    });

    if (user === null) {
      res.status(httpStatus.BAD_REQUEST).send('Invalid email');
    } else {
      const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
      if (isPasswordValid === true) {
        const accessToken = jwt.sign({ email: user.email, id: user.id }, JWT_SECRET);
        res.status(httpStatus.ACCEPTED).send({ user, accessToken });
      } else {
        res.status(httpStatus.BAD_REQUEST).send('Invalid password');
      }
    }
  } catch (error) {
    res.send(httpStatus.INTERNAL_SERVER_ERROR).send('Unable to log User: ' + error);
  }
});

export default router;

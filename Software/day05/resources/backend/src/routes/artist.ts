import { Router } from 'express';
import { Prisma } from '@prisma/client';
import httpStatus from 'http-status-codes';

import { Context } from '../context';

import validateMiddleware from '../middlewares/validate';

import { CreateArtistSchema } from '../schema/artist';
import { CreateMusicSchema } from '../schema/music';

const router = Router();

router.post('/', validateMiddleware(CreateArtistSchema), async (req, res) => {
  try {
    const artist = await Context.prisma.artist.create({
      data: {
        ...req.body,
        user: { connect: { id: Context.user?.id } },
      },
      include: { musics: true },
    });
    res.status(httpStatus.CREATED).send({ artist });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      res.status(httpStatus.CONFLICT).send('Name already used');
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Unable to create Artist: ' + error);
    }
  }
});

router.get('/:artistId', async (req, res) => {
  try {
    const artist = await Context.prisma.artist.findFirst({
      where: { id: req.params.artistId },
      include: { musics: { orderBy: { rating: 'desc' } } },
    });
    if (artist) res.status(httpStatus.OK).send({ artist });
    else res.status(httpStatus.BAD_REQUEST).send('Invalid artistId provided');
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Unable to create Artist: ' + error);
  }
});

router.post('/:artistId/music', validateMiddleware(CreateMusicSchema), async (req, res) => {
  try {
    const music = await Context.prisma.music.create({
      data: {
        ...req.body,
        artist: { connect: { id: req.params.artistId } },
      },
    });
    res.status(httpStatus.CREATED).send({ music });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      res.status(httpStatus.BAD_REQUEST).send('Invalid artistId provided');
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Unable to create Music: ' + error);
    }
  }
});

export default router;

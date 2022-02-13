import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const dropDb = () => prisma.$executeRaw`TRUNCATE TABLE "User" CASCADE;`;

const createUser = async ({ email, password }: { email: string; password: string }) =>
  prisma.user.create({
    data: {
      email,
      password: await bcrypt.hash(password, 10),
    },
  });

const createArtist = async ({
  name,
  rating,
  nationality,
  musicGender,
  photoUrl,
  userId,
}: {
  name: string;
  rating: number;
  nationality: string;
  musicGender: string;
  photoUrl: string;
  userId: string;
}) =>
  prisma.artist.create({
    data: {
      name,
      rating,
      nationality,
      musicGender,
      photoUrl,
      user: { connect: { id: userId } },
    },
  });

const createMusic = async ({
  name,
  rating,
  url,
  artistId,
}: {
  name: string;
  rating: number;
  url: string;
  artistId: string;
}) =>
  prisma.music.create({
    data: {
      name,
      rating,
      url,
      artist: { connect: { id: artistId } },
    },
  });

// eslint-disable-next-line require-jsdoc
async function main(): Promise<void> {
  console.log('Droping database ...');
  await dropDb();

  console.log('Creating on user, on artist and two musics ...');
  await createUser({ email: 'adrien@gmail.com', password: 'azertyuiop' }).then(async (user) => {
    await createArtist({
      name: 'Booba',
      rating: 5,
      nationality: 'Français',
      musicGender: 'Rap',
      photoUrl: 'https://i1.sndcdn.com/artworks-urMtgy5sq4xZhAqN-q4DeKw-t500x500.jpg',
      userId: user.id,
    }).then(async (artist) => {
      await createMusic({
        name: 'Leo Messi',
        rating: 4,
        url: 'https://deezer.page.link/dj2xej2sNBAHfmdx9',
        artistId: artist.id,
      });
      await createMusic({
        name: 'Pitbull',
        rating: 5,
        url: 'https://deezer.page.link/XsY7SMKnvNDwLfwB6',
        artistId: artist.id,
      });
    });
  });

  console.log('Done !');

  console.log(`
  Here are the credentials of the user:\n
  - email: adrien@gmail.com
  - password: azertyuiop\n`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });

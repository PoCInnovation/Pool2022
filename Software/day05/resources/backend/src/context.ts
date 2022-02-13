import { PrismaClient, User } from '@prisma/client';

import { API_HOST, API_PORT, CLIENT_URL, JWT_SECRET } from './config/api';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_URL, DB_USER } from './config/database';

const prisma = new PrismaClient();

export type ContextType = {
  prisma: PrismaClient;
  user?: User;
  config: {
    api: {
      API_HOST: string;
      API_PORT: number;
      CLIENT_URL: string;
      JWT_SECRET: string;
    };
    database: {
      DB_HOST: string;
      DB_NAME: string;
      DB_PASSWORD: string;
      DB_PORT: number;
      DB_URL: string;
      DB_USER: string;
    };
  };
};

export const Context: ContextType = {
  prisma,
  config: {
    api: {
      API_HOST,
      API_PORT,
      CLIENT_URL,
      JWT_SECRET,
    },
    database: {
      DB_HOST,
      DB_NAME,
      DB_PASSWORD,
      DB_PORT,
      DB_URL,
      DB_USER,
    },
  },
};

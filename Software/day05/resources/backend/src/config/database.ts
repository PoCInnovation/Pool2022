import env from './utils';

export const DB_USER = env('DB_USER').asString();
export const DB_PASSWORD = env('DB_PASSWORD').asString();
export const DB_HOST = env('DB_HOST').asString();
export const DB_PORT = env('DB_PORT').asPortNumber();
export const DB_NAME = env('DB_NAME').asString();
export const DB_URL = env('DB_URL').asString();

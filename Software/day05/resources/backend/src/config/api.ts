import env from './utils';

export const API_HOST = env('API_HOST').asString();
export const API_PORT = env('API_PORT').asPortNumber();
// Important to not use asUrlString()
export const CLIENT_URL = env('CLIENT_URL').asString();
export const JWT_SECRET = env('JWT_SECRET').asString();

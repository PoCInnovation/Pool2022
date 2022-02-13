/* eslint-disable no-unused-vars */
import winston from 'winston';

enum LogSeverity {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

const logFormat = winston.format.printf((info) => `${info.timestamp} [${info.level}]: ${info.message}`);

export default winston.createLogger({
  level: LogSeverity.DEBUG,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.timestamp(), winston.format.colorize(), logFormat),
    }),
    new winston.transports.File({
      filename: '/var/log/api.log',
      format: winston.format.combine(winston.format.timestamp(), logFormat),
    }),
    new winston.transports.File({
      level: LogSeverity.ERROR,
      filename: '/var/log/error.log',
      format: winston.format.combine(winston.format.timestamp(), logFormat),
    }),
  ],
});

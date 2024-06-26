import 'winston-mongodb';

import winston from 'winston';

import serverConfig from './serverConfig';

const { LOG_DB_URL } = serverConfig;

const allowedTransports: Array<winston.transport> = [];

allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),

        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:MM:SS'
        }),

        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
    options: { useUnifiedTopology: true},
}));

allowedTransports.push(new winston.transports.File({
    filename: 'app.log'
}));

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:MM:SS'
        }),

        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),

    transports: allowedTransports
});

export default logger;
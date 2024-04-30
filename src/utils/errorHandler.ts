import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import logger from '../configs/loggerConfig';
import BaseError from '../errors/BaseError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    if(err instanceof BaseError) {
        logger.error(err.message);
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {}
        });
    }

    logger.error('Internal Server Error happening for the incoming request');
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Something went wrong!',
        error: err,
        data: {}
    });
};

export default errorHandler;
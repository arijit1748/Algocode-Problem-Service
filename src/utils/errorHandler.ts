import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import BaseError from '../errors/BaseError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    if(err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {}
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Something went wrong!',
        error: err,
        data: {}
    });
};

export default errorHandler;
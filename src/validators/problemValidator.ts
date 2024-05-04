import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodSchema } from 'zod';

import logger from '../configs/loggerConfig';

export const validator = (schema: ZodSchema<unknown>) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            ...req.body
        });

        next();
    } catch (error) {
        logger.error('Invalid request structure is coming');
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: 'Invalid request structure is coming',
            error: error,
            data: {}
        });
    }
};
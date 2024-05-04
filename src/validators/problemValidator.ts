import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodSchema } from 'zod';

export const validator = (schema: ZodSchema<unknown>) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            ...req.body
        });

        next();
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: 'Invalid structure is getting',
            error: error,
            data: {}
        });
    }
};
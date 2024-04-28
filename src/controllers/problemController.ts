import { Request, Response } from 'express';

const pingChcekController = (_req: Request, res: Response) => {
    return res.json({
        message: 'pingChcekController is up'
    });
};

export default {
    pingChcekController
};
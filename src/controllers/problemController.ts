import { NextFunction, Request, Response } from 'express';

import NotImplementedError from '../errors/NotImplementedError';

function pingChcekController(_req: Request, res: Response) {
    return res.json({
        message: 'pingChcekController is up'
    });
};

function addProblem(_req: Request, _res: Response, next: NextFunction) {
    try {
        throw new NotImplementedError('addProblem');
    } catch (error) {
        next(error);
    }
};

function getProblems(_req: Request, _res: Response, next: NextFunction) {
    try {
        throw new NotImplementedError('getProblems');
    } catch (error) {
        next(error);
    }
};

function getProblem(_req: Request, _res: Response, next: NextFunction) {
    try {
        throw new NotImplementedError('getProblem');
    } catch (error) {
        next(error);
    }
};

function updateProblem(_req: Request, _res: Response, next: NextFunction) {
    try {
        throw new NotImplementedError('updateProblem');
    } catch (error) {
        next(error);
    }
};

function deleteProblem(_req: Request, _res: Response, next: NextFunction) {
    try {
        throw new NotImplementedError('deleteProblem');
    } catch (error) {
        next(error);
    }
};

export default {
    pingChcekController,
    addProblem,
    getProblems,
    getProblem,
    updateProblem,
    deleteProblem
};
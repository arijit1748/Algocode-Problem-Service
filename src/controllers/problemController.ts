import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import NotImplementedError from '../errors/NotImplementedError';
import ProblemRepository from '../repositories/ProblemRepository';
import ProblemService from '../services/ProblemService';
import { ProblemData } from '../types/problemDataRequestBodyDefinition';

const problemService = new ProblemService(new ProblemRepository());

function pingChcekController(_req: Request, res: Response) {
    return res.json({
        message: 'pingChcekController is up'
    });
};

async function addProblem(req: Request, res: Response, next: NextFunction) {
    try {
        const problemData: ProblemData = req.body;
        const response = await problemService.createProblem(problemData);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: response
        });
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
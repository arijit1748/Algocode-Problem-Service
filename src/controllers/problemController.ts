import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ProblemDto } from '../dtos/ProblemDto';
import ProblemRepository from '../repositories/ProblemRepository';
import ProblemService from '../services/ProblemService';

const problemService = new ProblemService(new ProblemRepository());

function pingChcekController(_req: Request, res: Response) {
    return res.json({
        message: 'pingChcekController is up'
    });
};

async function addProblem(req: Request, res: Response, next: NextFunction) {
    try {
        const problemData = req.body as ProblemDto;
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

async function getProblems(_req: Request, res: Response, next: NextFunction) {
    try {
        const response = await problemService.getProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
};

async function getProblem(req: Request, res: Response, next: NextFunction) {
    try {
        const response = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched a problem',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
};

async function updateProblem(req: Request, res: Response, next: NextFunction) {
    try {
        const problemData = req.body as ProblemDto;
        const response = await problemService.updateProblem(req.params.id, problemData);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully updated a problem',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
};

async function deleteProblem(req: Request, res: Response, next: NextFunction) {
    try {
        const response = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted a problem',
            error: {},
            data: response
        });
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
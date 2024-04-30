import mongoose from 'mongoose';

import logger from '../configs/loggerConfig';
import BadRequestError from '../errors/BadRequestError';
import NotFoundError from '../errors/NotFoundError';
import Problem from '../models/problemModel';
import { ProblemData } from '../types/problemDataRequestBodyDefinition';
import { IProblemRepository } from '../types/problemRepositoryDefinition';

class ProblemRepository implements IProblemRepository {

    async createProblem(problemData: ProblemData) {
        try {
            const problem = await Problem.create(problemData);
            return problem;
        } catch (error) {
            logger.error('Problem data is not provided correctly');
            throw error;
        }
    }

    async getProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            logger.error('No problems found in the db');
            throw error;
        }
    }

    async getProblem(id: string) {
        try {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                logger.error('Problem id which is provided, is invalid structure for mongodb object id');
                throw new BadRequestError('Problem Id', { id });
            }
            const problem = await Problem.findById(id);
            if(!problem) {
                logger.error(`No problem is found with the provided problem id: ${id}`);
                throw new NotFoundError('Problem', id);
            }
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async deleteProblem(id: string) {
        try {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                logger.error('Problem id which is provided, is invalid structure for mongodb object id');
                throw new BadRequestError('Problem Id', { id });
            }
            const problem = await Problem.findByIdAndDelete(id);
            if(!problem) {
                logger.error(`No problem is found with the provided problem id: ${id}`);
                throw new NotFoundError('Delete Problem', id);
            }
            return problem; 
        } catch (error) {
            throw error;
        }
    }

    async updateProblem(id: string, problemData: ProblemData) {
        try {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                logger.error('Problem id which is provided, is invalid structure for mongodb object id');
                throw new BadRequestError('Problem Id', { id });
            }
            const problem = await Problem.findByIdAndUpdate(id, problemData, { new: true });
            if(!problem) {
                logger.error(`No problem is found with the provided problem id: ${id}`);
                throw new NotFoundError('Update Problem', id);
            }
            return problem;
        } catch (error) {
            throw error;
        }
    }

}

export default ProblemRepository;
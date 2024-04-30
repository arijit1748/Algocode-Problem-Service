import mongoose from 'mongoose';

import BadRequestError from '../errors/BadRequestError';
import Problem from '../models/problemModel';
import { ProblemData } from '../types/problemDataRequestBodyDefinition';
import { IProblemRepository } from '../types/problemRepositoryDefinition';

class ProblemRepository implements IProblemRepository {

    async createProblem(problemData: ProblemData) {
        try {
            const problem = await Problem.create(problemData);
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async getProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            throw error;
        }
    }

    async getProblem(id: string) {
        try {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                throw new BadRequestError('Problem Id', { id });
            }
            const problem = await Problem.findById(id);
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async deleteProblem(id: string) {
        try {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                throw new BadRequestError('Problem Id', { id });
            }
            const problem = await Problem.findByIdAndDelete(id);
            return problem; 
        } catch (error) {
            throw error;
        }
    }

    async updateProblem(id: string, problemData: ProblemData) {
        try {
            if(!mongoose.Types.ObjectId.isValid(id)) {
                throw new BadRequestError('Problem Id', { id });
            }
            const problem = await Problem.findByIdAndUpdate(id, problemData, { new: true });
            return problem;
        } catch (error) {
            throw error;
        }
    }

}

export default ProblemRepository;
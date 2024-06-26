import logger from '../configs/loggerConfig';
import { ProblemDto } from '../dtos/ProblemDto';
import BadRequestError from '../errors/BadRequestError';
import { IProblemRepository } from '../types/problemRepositoryDefinition';
import markdownSanitizer from '../utils/markdownSanitizer';

class ProblemService {
    private problemRepository: IProblemRepository;
    constructor(problemRepository: IProblemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData: ProblemDto) {
        if(Object.keys(problemData).length == 0) {
            logger.error('Problem data is not provided');
            throw new BadRequestError('Problem Data', { message: 'problem data should not be empty' });
        }
        problemData.description = await markdownSanitizer(problemData.description);
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }

    async getProblems() {
        const problems = await this.problemRepository.getProblems();
        return problems;
    }

    async getProblem(id: string) {
        const problem = await this.problemRepository.getProblem(id);
        return problem;
    }

    async deleteProblem(id: string) {
        const deletedProblem = await this.problemRepository.deleteProblem(id);
        return deletedProblem;
    }

    async updateProblem(id: string, problemData: ProblemDto) {
        if(Object.keys(problemData).length == 0) {
            logger.error('Problem data is not provided');
            throw new BadRequestError('Problem Data', { message: 'problem data should not be empty' });
        }
        if(problemData.description) {
            problemData.description = await markdownSanitizer(problemData.description);
        }
        const updatedProblem = await this.problemRepository.updateProblem(id, problemData);
        return updatedProblem;
    }
    
}

export default ProblemService;
import { ProblemData } from '../types/problemDataRequestBodyDefinition';
import { IProblemRepository } from '../types/problemRepositoryDefinition';
import markdownSanitizer from '../utils/markdownSanitizer';

class ProblemService {
    private problemRepository;
    constructor(problemRepository: IProblemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData: ProblemData) {
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
    
}

export default ProblemService;
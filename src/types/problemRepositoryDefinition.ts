import { ProblemDto } from '../dtos/ProblemDto';

export interface IProblemRepository {
    createProblem: (problemData: ProblemDto) => object | Promise<object>
    getProblems: () => object | Promise<object>
    getProblem: (id: string) => object | Promise<object>
    deleteProblem: (id: string) => object | Promise<object>
    updateProblem: (id: string, problemData: ProblemDto) => object | Promise<object>
};
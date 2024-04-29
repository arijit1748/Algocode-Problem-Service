import { ProblemData } from './problemDataRequestBodyDefinition';

export interface IProblemRepository {
    createProblem: (problemData: ProblemData) => object | Promise<object>
    getProblems: () => object | Promise<object>
    getProblem: (id: string) => object | Promise<object>
    deleteProblem: (id: string) => object | Promise<object>
    updateProblem: (id: string, problemData: ProblemData) => object | Promise<object>
}
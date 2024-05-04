import express from 'express';

import problemController from '../../controllers/problemController';
import { problemZodSchema } from '../../dtos/ProblemDto';
import { validator } from '../../validators/problemValidator';

const problemRouter = express.Router();

problemRouter.get('/ping', problemController.pingChcekController);

problemRouter.post('/', validator(problemZodSchema), problemController.addProblem);

problemRouter.get('/', problemController.getProblems);

problemRouter.get('/:id', problemController.getProblem);

problemRouter.delete('/:id', problemController.deleteProblem);

problemRouter.patch('/:id', validator(problemZodSchema), problemController.updateProblem);

export default problemRouter;
import express from 'express';

import problemController from '../../controllers/problemController';

const problemRouter = express.Router();

problemRouter.get('/ping', problemController.pingChcekController);

problemRouter.post('/', problemController.addProblem);

problemRouter.get('/', problemController.getProblems);

problemRouter.get('/:id', problemController.getProblem);

problemRouter.delete('/:id', problemController.deleteProblem);

problemRouter.patch('/:id', problemController.updateProblem);

export default problemRouter;
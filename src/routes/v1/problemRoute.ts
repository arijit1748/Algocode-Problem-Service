import express from 'express';

import problemController from '../../controllers/problemController';

const problemRouter = express.Router();

problemRouter.get('/ping', problemController.pingChcekController);

export default problemRouter;
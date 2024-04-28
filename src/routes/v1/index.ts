import express from 'express';

import problemRouter from './problemRoute';

const v1Router = express.Router();

v1Router.use('/problems', problemRouter);

export default v1Router;
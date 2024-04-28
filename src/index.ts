import express from 'express';

import logger from './configs/loggerConfig';
import serverConfig from './configs/serverConfig';
import apiRouter from './routes';
import errorHandler from './utils/errorHandler';

const { PORT } = serverConfig;

const app = express();

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    logger.info(`Server started at PORT: ${PORT}`);
});
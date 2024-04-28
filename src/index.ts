import express from 'express';

import connectToDb from './configs/dbConfig';
import logger from './configs/loggerConfig';
import serverConfig from './configs/serverConfig';
import apiRouter from './routes';
import errorHandler from './utils/errorHandler';

const { PORT } = serverConfig;

const app = express();

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
    logger.info(`Server started at PORT: ${PORT}`);
    await connectToDb();
    logger.info('Db successfully connected');
});
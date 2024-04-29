import bodyParser from 'body-parser';
import express from 'express';

import connectToDb from './configs/dbConfig';
import logger from './configs/loggerConfig';
import serverConfig from './configs/serverConfig';
import apiRouter from './routes';
import errorHandler from './utils/errorHandler';

const { PORT } = serverConfig;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
    logger.info(`Server started at PORT: ${PORT}`);
    await connectToDb();
    logger.info('Db successfully connected');
});
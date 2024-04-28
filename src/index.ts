import express from 'express';

import serverConfig from './configs/serverConfig';
import apiRouter from './routes';
import errorHandler from './utils/errorHandler';

const { PORT } = serverConfig;

const app = express();

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});
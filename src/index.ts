import express from 'express';

import serverConfig from './configs/serverConfig';

const { PORT } = serverConfig;

const app = express();

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});
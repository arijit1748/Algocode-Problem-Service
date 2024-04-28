import mongoose from 'mongoose';

import logger from './loggerConfig';
import serverConfig from './serverConfig';

const { ATLAS_DB_URL, NODE_ENV } = serverConfig;

async function connectToDb() {
    try {
        if(NODE_ENV == 'developement') {
            await mongoose.connect(ATLAS_DB_URL);
        }
    } catch (error) {
        logger.error('Server Can not connect to database');
        throw error;
    }
}

export default connectToDb;
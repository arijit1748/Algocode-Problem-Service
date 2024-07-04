import mongoose from 'mongoose';

import logger from './loggerConfig';
import serverConfig from './serverConfig';

const { ATLAS_DB_URL, NODE_ENV } = serverConfig;

class DBConnection {
    private uri: string;
    private isConnected: boolean;
    private static instance: DBConnection | null = null;

    constructor(db_uri: string) {
        this.uri = db_uri;
        this.isConnected = false;
    }

    public static getInstance(db_uri: string) {
        if(!DBConnection.instance) {
            DBConnection.instance = new DBConnection(db_uri);
        }
        else {
            logger.error('Only one connection can exist');
            throw new Error('Only one connection can exist');
        }

        return DBConnection.instance;
    }

    async connect() {
        if(this.isConnected) {
            logger.error('DB is already connected');
            throw new Error('DB is already connected');
        }
        if(NODE_ENV == 'development') {
            await mongoose.connect(this.uri);
            logger.info('DB successfully connected');
            this.isConnected = true;
        }
    }

    async disconnect() {
        if(this.isConnected) {
            await mongoose.disconnect();
            logger.info('DB successfully disconnected');
            this.isConnected = false;
        }
    }
}

const db = DBConnection.getInstance(ATLAS_DB_URL);

export default db;
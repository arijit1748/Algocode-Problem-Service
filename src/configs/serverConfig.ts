import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 4000,
    LOG_DB_URL: process.env.LOG_DB_URL || '',
    ATLAS_DB_URL: process.env.ATLAS_DB_URL || '',
    NODE_ENV: process.env.NODE_ENV || 'developement'
};
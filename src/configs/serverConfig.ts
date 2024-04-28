import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 4000,
    LOG_DB_URL: process.env.LOG_DB_URL || '',
};
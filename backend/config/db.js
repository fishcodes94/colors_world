// db.js
import dotenv from 'dotenv';
dotenv.config();

import pkg from 'pg';

const { Pool } = pkg;



const pool = new Pool({
    user: process.env.PG_USER_NAME,
    host: process.env.PG_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.PG_PASSWORD,
    port: 5432,
    ssl:  process.env.NODE_ENV === "production" 
    ? { require: true, rejectUnauthorized: true }  // sometimes you need rejectUnauthorized false with some hosts
    : false,
});



export default pool
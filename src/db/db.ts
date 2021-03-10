import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || ''),
});

pool.connect(() => {
  console.log('connected to database');
});

pool.on('close', () => {
  pool.removeAllListeners();
  console.log('removed all listeners');
});

pool.on('end', () => {
  pool.end();
  console.log('closed database connection');
});

export default pool;

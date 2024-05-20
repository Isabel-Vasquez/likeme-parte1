import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
	user: process.env.PG_USER,
	host: process.env.PG_HOST,
	database: process.env.PG_DATABASE,
	password: process.env.PG_PASSWORD,
	port: process.env.PG_PORT,
	allowExitOnIdle: true,
});

const testConnection = async () => {
	try {
		const client = await pool.connect();
		await client.query('SELECT NOW()');
		client.release();
		console.log('Database connection has been established successfully.');
	} catch (err) {
		console.error('Unable to connect to the database:', err);
	}
};

export { pool, testConnection };

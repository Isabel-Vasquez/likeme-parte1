import { pool } from '../database/connection.js';

const getPosts = async () => {
  const result = await pool.query('SELECT * FROM posts');
  return result.rows;
};

const createPost = async (titulo, img, descripcion) => {
  const result = await pool.query(
    'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *',
    [titulo, img, descripcion]
  );
  return result.rows[0];
};

export { getPosts, createPost };

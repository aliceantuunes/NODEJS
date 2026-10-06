require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  // Adiciona SSL automaticamente quando estiver usando um banco na nuvem
  ssl: process.env.DB_HOST && !process.env.DB_HOST.includes('localhost') && process.env.DB_HOST !== '127.0.0.1' 
    ? { rejectUnauthorized: true } 
    : false
});

module.exports = pool;
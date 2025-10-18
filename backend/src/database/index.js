const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();


const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "masterkey";
const DB_NAME = process.env.DB_NAME || "intercambio_habilidades";
const DB_PORT = Number(process.env.DB_PORT) || 3306;

let pool;

async function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: DB_PORT,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
}

async function query(sql, params) {
  const p = await getPool();
  const [rows] = await p.execute(sql, params);
  return rows;
}

module.exports = { getPool, query };

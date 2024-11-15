const { Pool } = require("pg");

// Configuração de conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "escola",
  password: "fariadocarmo123",
  port: 5432,
});

module.exports = pool;

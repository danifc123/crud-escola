const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "escola",
  password: "fariadocarmo123",
  port: 5433,
});

module.exports = pool;

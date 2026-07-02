const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "biotrack_ai",
  password: "sozek@74",
  port: 9904,
});

module.exports = pool;
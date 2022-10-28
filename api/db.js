const Pool = require("pg").Pool;

const db = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://postgres:@localhost:5432/staytuned",
  ssl: process.env.DATABASE_URL ? true : false,
});

module.exports = db;

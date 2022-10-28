const Pool = require("pg").Pool;
require("dotenv").config({ path: "../.env" });

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = db;

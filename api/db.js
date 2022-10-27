const Pool = require("pg").Pool;

const db = new Pool({
  user: "paulpark",
  host: "localhost",
  port: 5432,
  database: "staytuned",
});

module.exports = db;
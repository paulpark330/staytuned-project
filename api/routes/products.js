const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  const result = await db.query(`SELECT * FROM "staytuned"."products"`);
  res.status(200).json(result.rows);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const sql = `
  SELECT * FROM "staytuned"."products"
  WHERE product_id = $1
  `;
  const params = [id];
  const result = await db.query(sql, params);
  res.status(200).json(result.rows[0]);
});

module.exports = router;

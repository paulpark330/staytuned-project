const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res, next) => {
  console.log("req.query", req.query);
  const allProducts = await db.query(`SELECT * FROM "staytuned"."products"`);
  res.status(200).json(allProducts.rows);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log('id', id);
  const product = await db.query(
    `SELECT * FROM "staytuned"."products" WHERE product_id = ${id}`
  );
  res.status(200).json(product.rows[0]);
});

module.exports = router;

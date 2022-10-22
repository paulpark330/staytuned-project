const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/products", (req, res, next) => {
  console.log("req.query", req.query);
  const allProducts = db.query("SELECT * FROM products");
  res.json(allProducts.rows);
});

module.exports = router;

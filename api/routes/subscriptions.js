const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  const result = await db.query(`SELECT * FROM "staytuned"."subscriptions"`);
  res.status(200).json(result.rows);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const sql = `
  SELECT * FROM "staytuned"."subscriptions"
  WHERE subscription_id = $1
  `;
  const params = [id];
  const result = await db.query(sql, params);
  res.status(200).json(result.rows[0]);
});

router.post("/", async (req, res) => {
  const { email, product_id } = req.body;
  console.log("email : ", email);
  console.log("product_id : ", product_id);
  const sql = `
    INSERT INTO "staytuned"."subscriptions" ("email", "product_id")
    VALUES ($1, $2)
    ON CONFLICT ("email", "product_id" ) DO NOTHING
    RETURNING *
    `;
  const params = [email, product_id];
  const result = await db.query(sql, params);
  const [subscription_id] = result.rows;
  if (!subscription_id) {
    res.status(400).json({ message: "Already subscribed" });
  }
  res.status(200).json(result.rows[0]);
});

module.exports = router;

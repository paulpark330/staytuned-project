const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  const { id } = req.query;

  const sql = `
    DELETE FROM "staytuned"."subscriptions"
    WHERE subscription_id = $1
    RETURNING *
    `;
  const params = [id];
  const result = await db.query(sql, params);
  console.log("result", result.rows[0]);
  res.send("Unsubscribed successfully!");
});

module.exports = router;

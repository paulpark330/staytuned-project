const express = require("express");
const router = express.Router();
const db = require("../db");
const sendEmail = require("../util/email");

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

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { newPrice, currentPrice, productImg } = req.body;

  console.log("id : ", id);
  console.log("newPrice : ", newPrice);

  const sql = `
  UPDATE "staytuned"."products"
  SET price = $1
  WHERE product_id = $2
  RETURNING *
  `;
  const params = [newPrice, id];
  const result = await db.query(sql, params);

  console.log("result", result.rows);

  const priceDifference = currentPrice - result.rows[0].price;

  console.log("priceDifference", priceDifference);

  if (priceDifference > 0) {
    console.log(
      `The price of ${result.rows[0].name} has dropped by ${priceDifference} USD!`
    );

    const sql = `
    SELECT * FROM "staytuned"."subscriptions"
    WHERE product_id = $1
    `;
    const params = [id];
    const subscriptionResults = await db.query(sql, params);

    console.log(
      "price difference subscriptionResults",
      subscriptionResults.rows
    );

    subscriptionResults.rows.forEach(async (subscription) => {
      const emailData = {
        email: subscription.email,
        name: result.rows[0].name,
        priceDifference,
        productImg,
        subscriptionId: subscription.subscription_id,
      };
      sendEmail(emailData);
    });
  }

  res.status(200).json(result.rows[0]);
});

module.exports = router;

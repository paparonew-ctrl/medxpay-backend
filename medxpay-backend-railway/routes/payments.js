
const express = require("express");
const router = express.Router();

let transactions = [];

router.post("/create", (req, res) => {

  const { amount } = req.body;

  const tx = {
    id: Date.now(),
    amount,
    status: "pending",
    created: new Date()
  };

  transactions.push(tx);

  res.json(tx);
});

router.get("/all", (req, res) => {
  res.json(transactions);
});

module.exports = router;

const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require("uuid")

// wallet marchand XRPL
const MERCHANT_WALLET = "rTON_WALLET_XRPL"

// mémoire temporaire des paiements
let payments = {}

// créer paiement
router.post("/create-payment", (req, res) => {

  const { amount } = req.body

  const paymentId = uuidv4()

  const payment = {
    id: paymentId,
    amount: amount,
    wallet: MERCHANT_WALLET,
    status: "pending",
    created: Date.now()
  }

  payments[paymentId] = payment

  res.json(payment)

})

// vérifier statut paiement
router.get("/payment-status/:id", (req, res) => {

  const payment = payments[req.params.id]

  if (!payment) {
    return res.status(404).json({ error: "payment not found" })
  }

  res.json(payment)

})

// liste paiements
router.get("/all", (req, res) => {

  res.json(Object.values(payments))

})

module.exports = router

const xrpl = require("xrpl")

const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233")

// wallet du marchand
const MERCHANT_WALLET = "TON_WALLET_XRPL"

async function startXRPLListener() {

  await client.connect()

  console.log("Connected to XRPL testnet")

  client.request({
    command: "subscribe",
    streams: ["transactions"]
  })

  client.on("transaction", (tx) => {

    const transaction = tx.transaction

    if (!transaction) return

    // filtre destination
    if (transaction.Destination === MERCHANT_WALLET) {

      console.log("MEDXPAY PAYMENT DETECTED")

      console.log({
        amount: transaction.Amount,
        sender: transaction.Account,
        hash: transaction.hash
      })

    }

  })

}

module.exports = startXRPLListener

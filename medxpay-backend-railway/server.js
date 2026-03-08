
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentsRoute = require("./routes/payments");
const startXRPLListener = require("./services/xrplListener");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/payments", paymentsRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("MEDXPAY backend running on port " + PORT);
});

startXRPLListener();

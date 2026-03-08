
const xrpl = require("xrpl");

async function startXRPLListener(){

  try{

    const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");

    await client.connect();

    console.log("Connected to XRPL testnet");

    await client.request({
      command: "subscribe",
      streams: ["transactions"]
    });

    client.on("transaction", (tx) => {

      console.log("XRPL Transaction detected:");
      console.log(tx);

    });

  }catch(err){

    console.error("XRPL Listener error:", err);

  }

}

module.exports = startXRPLListener;

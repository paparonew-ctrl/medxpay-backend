const WebSocket = require("ws")

const wss = new WebSocket.Server({ port: 8080 })

function broadcastPayment(tx){

  wss.clients.forEach(client => {

    if(client.readyState === WebSocket.OPEN){

      client.send(JSON.stringify(tx))

    }

  })

}

module.exports = { broadcastPayment }

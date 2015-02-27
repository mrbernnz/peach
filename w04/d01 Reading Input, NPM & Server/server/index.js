var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {

  ws.on("message",function(message)
  {
    console.log(message);
    ws.send(message);
  })
  // console.log("Client connected!");
});

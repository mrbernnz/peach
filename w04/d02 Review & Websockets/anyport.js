// have your websocket code take one argument specifying the port to connect to the server on
// so node main.js 2000 will connect on port 2000

var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");

ws.on("open", function () {
  console.log("Connected to server.");
  ws.send("5 6");
  ws.on("message",function(message)
  {
    console.log("The answer is " + message + ".");
  });
});

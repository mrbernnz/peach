// write a client that sends back to the server any message it receives

var strng = process.argv[2];

var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");

ws.on("open",function()
{
  ws.send(strng);
  ws.on("message",function(message)
  {
    console.log(message);
  });
});

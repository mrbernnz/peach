// write a client that sends back to the server "hey server" when (and only when) it receives the message "hey client"

var strng = process.argv[2];

var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");

ws.on("open",function()
{

  ws.on("message",function(message)
  {
    if (message===) {

    }
    console.log(message);
    ws.send(strng);
  });
});

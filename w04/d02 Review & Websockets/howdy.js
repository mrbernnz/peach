// have your client side code send the message Howdy! to your server every second
// HINT think about where to put this code. Make sure that you don't try to send a message if your client isn't connected yet

var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");

ws.on("open",function()
{
  setInterval(function()
  {
    ws.send("Howdy");
  },1000);
});

// Have the server message to the client "Hello" every second.
// Hint instead of doing ws.send right away, use setInterval to do the same every second.

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws)
{
  //repeat hello every second
  setInterval(function()
  {
    ws.send("Hello");
    // console.log("Hello");
  },1000);
});

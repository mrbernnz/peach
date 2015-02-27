// part 1:
//
// write a client that upon receiving user input sends a cowsay'd version of the messsage to the server

// var cowsay = require("cowsay");
// var WebSocket = require("ws");
// var ws = new WebSocket("ws://localhost:3000");
// ws.on("open",function()
// {
//   console.log("connected");
//   ws.on("message",function(message)
//   {
//     var moo = cowsay.say({text:message});
//     ws.send(moo);
//   });
// });

// part 2:
//
// write a server that upon receiving input from the client sends a cowsay'd version back to the client
var cowsay = require("cowsay");
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port:3000});
server.on("connection",function(ws)
{
  ws.on("message",function(message)
  {
    var moo = cowsay.say({text:message});
    ws.send(moo);
  });
});

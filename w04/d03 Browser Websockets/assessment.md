1. Create a server. when a client sends a message to that server, have the server send the message back.
2. Allow the client to send a string like "message,g" and have the server return the index of the letter after the comma in this case, the in index is 5.

```js
// server
var inpt = process.argv[2];
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port:3000});
var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");
ws.on("open",function()
{
  ws.send(inpt);
});

server.on("connection",function(ws)
{
  // console.log("Hello");
  ws.on("message",function(message)
  {
    ws.send(message);
  })
});

// var WebSocketServer = require("ws").Server;
// var server = new WebSocketServer({port:3000});
// var WebSocket = require("ws");
// var ws = new WebSocket("ws://localhost:3000")
//
// ws.on("open",function()
// {
//   // console.log("Server connected");
//   ws.send("I'm fine");
// });
//
// server.on("connection",function(ws)
// {
//   // console.log("User connected");
//   // ws.send("Hello")
//     ws.on("message",function(message)
//   {
//     // console.log("User connected");
//     ws.send(message);
//   });
// });
```

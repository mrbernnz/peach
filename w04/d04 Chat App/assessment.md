####Write a brat server. When a client sends a message to the server, have the server respond with "I know you your are, but what am I?"

####Bonus
```Have the brat say "Oh yeah? well (client message)!"```

```js
// client
var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");
  ws.on("open",function()
  {
    process.stdin.on("data",function(input)
    {
      var processInput = input.toString().trim();
      var message = processInput
      ws.send(message);
  });
});
```

```js
// server
var Wss = require("ws").Server;
var server = new Wss({port:3000});
server.on("connection",function(ws)
{
  ws.on("message",function(message)
  {
    ws.send("Oh yeah? " + message + "!")
  })
});
```

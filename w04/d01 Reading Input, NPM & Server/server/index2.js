var cntr = 1;
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  //var cntr = server.value;
  console.log(cntr + " Client connected!");
  cntr+=1;
  ws.send("hello");
  ws.on("message",function(message)
  {
    // console.log("They said " + message);
    this.send("They said " + message);
  })
});

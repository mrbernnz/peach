// Only log the message that was received on the server side if the message is exactly Howdy!
var cntr = 1;
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  //var cntr = server.value;
  console.log(cntr + " Client connected!");
  cntr+=1;
  // ws.send("hello");
  ws.on("message",function(message)
  {
    if (message==="Howdy") {
      // console.log("They said " + message);
    }
    this.send("You said " + message);
  })
});

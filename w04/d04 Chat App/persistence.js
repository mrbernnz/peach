var Wss = require("ws").Server;
var server = new Wss({port:3000});
var userhistory = [];

server.on("connection",function(ws)
{

  // var arr=["Jill","Jack"];
  // arr.join("\n");
  // var history = userhistory.push(arr);
  // ws.send(history);

  ws.on("message",function(msg)
  {
    userhistory.push(msg);
    // ws.send(history + msg);
  });
  var history = userhistory.join("\n");
  ws.send(history);
})

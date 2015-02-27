// var obj = ["Jack","Jill"];
// JSON.stringify(obj);
// JSON.parse(obj);
//
//server
// ws.on("message"...)
// JSON.parse(msg);
// var msghash = JSON.parse(msg);
// console.log(msghash);


var Wss = require("ws").Server;
var server = new Wss({port:3000});
server.on("connection",function(ws)
{
  ws.on("message",function(msg)
  {
    // JSON.parse(msg);
    var msghash = JSON.parse(msg);
    console.log(msghash.name + ": " + msghash.words);
  })
})

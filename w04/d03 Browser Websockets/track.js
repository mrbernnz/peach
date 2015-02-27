var Wss = require("ws").Server;
var server = new Wss({port:3000});
var clients=[];
server.on("connection",function(ws)
{
  clients.push(ws);
  // console.log(ws);
  // ws.send("woah!");
  clients.forEach(function(client)
  {
    client.send("Sean has lots of hair");
  });
  ws.on("close",function()
  {
    var ind = clients.indexOf(ws);
    clients.splice(ind,1);
  });
});

//clients
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port:3000});
var connections = [];
console.log("connected on port 3000");
server.on("connection",function(ws)
{
  ws.on("message",function(msg)
  {
    console.log(msg);
    connections.forEach(function(elem)
    {
      if (elem!==ws)
      {
        elem.send(msg);
      };
    });
  });
  console.log("client connected");
  connections.push(ws);
  ws.on("close",function()
  {
    var i = connections.indexOf(ws);
    connections.splice(i,1);
  });
});

//history
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port:3000});
var history =[];
console.log("connected on port 3000");
server.on("connection",function(ws)
{
  ws.on("message",function(msg)
  {
    var parsed = JSON.parse(msg);
    history.push(parsed);
    var out = [parsed];
    connections.forEach(function(elem)
    {
      if (elem!==ws)
      {
        elem.send(JSON.stringify(out));
      };
    });
  });
});

//badword check inside "message"
var baddies = ["poo","fart"];
var kick = false;
baddies.forEach(function(badword)
{
  if (parsed.msg.indexOf!==-1)
  {
    kick=true;
  };
  if (kick)
  {
    ws.close();
  };
  else {
    history.push(parsed);
    var out = [parsed];
    connection.forEach(function(elem)
    {
      if (elem!==ws)
      {
        elem.send(JSON.stringify(out));
      };
    });
  };
};

//in "connection"
console.log("client connected");
connnections.push(ws);
ws.send(JSON.stringify(history));

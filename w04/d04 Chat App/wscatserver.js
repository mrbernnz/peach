// Exercise: wscat server
//
// write a server that listen's for only one client. If a second client tries to connect, simply close their connection right away
// make sure that any input that the user types is captured and sent to your one client
// Bonus try to recreate the command line interface of wscat where you type wscat -l 3000 to create a server on port 3000
// this means that your server would take two parameters, the first you should confirm is -l, anything else should cause your program to exit
// the second argument is the port. We've been using port 3000 but it could be anything
// note that wscat also has the following properties
// wscat -l 3000 right away prints out the message listening on port 3000 (press CTRL+C to quit)
// when a client connects wscat prints client connected
// when the client disconnects it prints disconnected

var WscatServer = require("ws").Server;
var flag = process.argv[2];
var portarg = process.argv[3];
if (flag !== "-l" || !portarg)
{
  console.log("bad input");
  process.exit(1);
}
var server = new WscatServer({port:portarg});
var client;
var connected = false;
console.log("listening on port " + portarg + " (press cntr-C to exit)");
server.on("connection",function(ws)
{
  if (connected===false)
    {
      client = ws;
      connected = true;
      //print what the client sends
      ws.on("message",function(msg)
      {
        console.log(msg);
      });
      //client disconnects and has message print
      ws.on("close",function()
      {
        connected = false;
        console.log("disconnected");
        ws.send("disconnected")
      });
      console.log("client connected");
      ws.on("message",function()
      {
        ws.send("You're connected to me now!")
      })
    }
    else
    {
      ws.close();
    }
});

  process.stdin.on("data",function(input)
  {
    if (connected===true)
      {
        var processInput = input.toString().trim();
        client.send(processInput);
      }
  });

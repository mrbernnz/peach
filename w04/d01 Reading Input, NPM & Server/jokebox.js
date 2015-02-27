// Write a command line app
//
// That prints out a random joke (chosen from 3 or more jokes)
// Prompts the user Would you like to hear another one?
// Repeats a joke on input y and exits on input n

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  //var cntr = server.value;
  // console.log(cntr + " Client connected!");
  // cntr+=1;
  arr = ["joke 1","joke 2","joke 3"]

  var randarr = arr[Math.floor(arr.length * Math.random())];

  ws.send("Would you like to hear another one?");
  
  ws.on("message",function(message)
  {
    // console.log("They said " + message);
    this.send("They said " + randarr);
  })

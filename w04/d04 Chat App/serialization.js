var WsClient = require("ws");
var client = new WsClient("ws://localhost:3000");
// var name = {
//   first:"Noel",
//   last:"Sagaille"
// }
client.on("open",function()
{
  console.log("connected");
})
  process.stdin.on("data",function(input)
  {
    var hash = {
      name:"Noel"
    }
    hash["words"]=input.toString().trim();
    var stuff = JSON.stringify(hash);
    client.send(stuff);
    // var username = input.toString().trim();
    // ws.send("Hello " + username + ".");
  });

  // JSON.stringify(name);
  // ws.send(name);

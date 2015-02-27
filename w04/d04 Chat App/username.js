// part 2:
//
// Instead of hardcoding the name of a chat user, let's allow them to change it
// When your chat client starts have their name be "anonymous"
// Create an input box somewhere on the page where the user simply enters in their name. You don't even need a button to submit it if you don't want.
// Whenever a message is inputed by the user, construct your message object (the object that you serialize with JSON) setting the name value to what is in that input box
// So if the input box is currently filled with the text Jack and the user types in the message Hello Everybody then the object that is serialized and sent to the server would be {name: "Jack", msg: "Hello Everybody"}

var On = require("ws").Server;
var serverOn = new On({port:3000});
serverOn.on("connection",function(ws)
{
  ws.send("Anonymous: ")
  ws.on("message",function(msg)
  {
    ws.send(msg);
    // var hash = JSON.parse(msg);
  });
});
console.log("Anonymous: ");

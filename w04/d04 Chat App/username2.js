// part 2:
//
// Instead of hardcoding the name of a chat user, let's allow them to change it
// When your chat client starts have their name be "anonymous"
// Create an input box somewhere on the page where the user simply enters in their name. You don't even need a button to submit it if you don't want.
// Whenever a message is inputed by the user, construct your message object (the object that you serialize with JSON) setting the name value to what is in that input box
// So if the input box is currently filled with the text Jack and the user types in the message Hello Everybody then the object that is serialized and sent to the server would be {name: "Jack", msg: "Hello Everybody"}

var div = document.createElement("div");
var form = document.createElement("form");
var input = document.createElement("input");
var text = document.createElement("p");
input.setAttribute("type","text");
input.setAttribute("id","id");
input.setAttribute("placeholder","Anonymous");
document.body.appendChild(div);
div.appendChild(form);
form.appendChild(input);

// var Open = require("ws");
var clientOpen = new WebSocket("ws://localhost:3000");

var user = function()
{
  input.addEventListener("keydown",function()
  {
    var userInput = document.getElementById("id").value;
    ws.send(userInput);
  });
}
input.value="";

// process.stdin.on("data",function(input)
// {
//   var hash = {
//   name:"Noel"
// }
// hash["words"]=input.toString().trim();
// var stuff = JSON.stringify(hash);
// client.send(stuff);
// })

clientOpen.addEventListener("open", function(evt) {
  // user('Connected to server and ready to chat!');
});

clientOpen.addEventListener("message", function(evt) {
  clientOpen.send(evt.data);
});;

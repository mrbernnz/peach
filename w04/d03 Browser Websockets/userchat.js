// Exercise: Let the user chat!
//
// we need to add a way for the user of the browser chat to enter in text and send messages to the server
//
// Add an input box on your page to capture input. Just put this in the html code, this does not need to be dynamically generated in javascript
// Add a button with an event listener that sends the text in the input box to the server
// Be sure to test this out using wscat -l 3000 to act as a server


//create textbox and submit button
var div = document.createElement("div");
var form = document.createElement("form");
var input = document.createElement("input");
var button = document.createElement("input");
var space = document.createElement("p");

//set attributes for textbox and button
input.setAttribute("type","text");
input.setAttribute("id","input");
button.setAttribute("type","submit");
button.setAttribute("value","Submit");
button.setAttribute("id","button");
document.body.appendChild(div);
div.appendChild(form);
form.appendChild(input);
form.appendChild(space);
form.appendChild(button);

//connect to server
var ws = new WebSocket("ws://localhost:3000");

var addText = function(msg)
{
  //grab input from textbox
  button.addEventListener("click",function()
  {
    var textinput = document.getElementById("input").value;
    //send textbox input to server
    ws.send(textinput);
  });
}

ws.addEventListener("open", function(evt) {
  addText('Connected to server and ready to chat!');
});

ws.addEventListener("message", function(evt) {
  ws.send(evt.data);
});

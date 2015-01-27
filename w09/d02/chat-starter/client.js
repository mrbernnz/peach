var ip = "localhost";
var ws = new WebSocket('ws://' + ip + ':3000');

//start the app with the cursor in the input box
document.querySelector('.inputMessage').focus();

function appendToChat(msg) {
  var messages = document.querySelector('.messages');
  var msgli = document.createElement('li');
  var txtNode = document.createTextNode(msg);
  msgli.appendChild(txtNode);
  messages.appendChild(msgli);
  messages.scrollTop = messages.scrollHeight;
}

window.onkeypress = function(evt) {
  var inputMessage = document.querySelector('.inputMessage');
  inputMessage.focus();
  if (evt.keyCode === 13) {
    appendToChat(inputMessage.value);
    ws.send(inputMessage.value);
    inputMessage.value = "";
  }
}

ws.onmessage = function(evt) {
  var message = evt.data;
  appendToChat(message);
}

//debugger;
var ul = document.createElement("ul");
var server = new WebSocket({port:3000});
var addText = function(msg)
{
  var newL = document.createElement("li");
  newL.innerHTML = msg;
  var firstLi = ul.firstChild;
  ul.insertBefore(newL,firstLi);
}
document.body.appendChild(ul);

ws.addEventListener("open", function(evt) {
  addText('connected');
});

ws.addEventListener("message", function(evt) {
  console.log(evt.data);
  addText(evt.data)
});

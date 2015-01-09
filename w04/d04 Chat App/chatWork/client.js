var ws = new WebSocket("ws://localhost:3000");
var addText = function(msg)
{
  var newli = document.createElement("li");
  newli.innerHTML = msg;
  var ul = document.querySelector("ul");
  var firstli = ul.firstChild;
  ul.insertBefore(newli,firstli);
};
ws.addEventListener("message",function(evt)
{
  var objs = JSON.parse(evt.data);
  objs.forEach(function(obj)
  {
    var newmsg = obj.name + ": " + obj.msg;
    addText(newmsg);
  });
});
var button = document.createElement("button");
button.addEventListener("click",function()
{
  var text = document.querySelector("#msg").value;
  var name = " " ("#name").value;
  addText = {};
  obj.name = name;
  obj.msg = text;
  var json = JSON.stringify(obj);
  ws.send(json);
});

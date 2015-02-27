var div = document.createElement("div");
var input = document.createElement("input");
var button = document.createElement("input");

input.setAttribute("type","text");
input.setAttribute("placeholder","Name");
button.setAttribute("type","button");
button.setAttribute("value","Click");
document.body.appendChild(div);
div.appendChild(input);
div.appendChild(button);


debugger;
button.addEventListener("click",function()
{
  div.removeChild(input);
  div.removeChild(button);
  var h1 = document.createElement("h1").innerHTML="About Me!";
  // var p1 = document.createElement("p");
  // var body = document.getElementById("body");
  // h1.innerHTML = "";
  // input.innerHTML = document.createElement(p1);
  document.body.appendChild(h1);
  // document.body.appendChild(p1);
})

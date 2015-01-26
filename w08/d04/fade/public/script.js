console.log("test")
var fade = function(tag) {
  tag.setAttribute("class", "fade")
}
var writeThought = function(thought) {
  console.log(3)
  var body = document.getElementById("bod");
  var p = document.createElement("p");
  console.log(6)
  var rando = (Math.floor(Math.random()*1000) + 1);
  p.setAttribute("style", "margin-left: " + rando + ";");
  p.setAttribute("class", "greydout");
  p.innerText = thought;
  body.appendChild(p);
  setTimeout(fade(p); 2000);
}

var getThought = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://127.0.0.1:4567/thoughts")
  xhr.addEventListener("load", function() {
    var response = xhr.responseText;
    response = JSON.parse(response)
    console.log(response);
    writeThought(response.thought);
  });
  xhr.send();
};

setInterval(getThought, 2000)

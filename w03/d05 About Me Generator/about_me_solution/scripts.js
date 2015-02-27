var body = document.querySelector("body");
var button = document.createElement("button");
button.innerText = "Submit"
button.setAttribute("class", "form")
var divPInput = function (id){
  var div = document.createElement("div");
  div.setAttribute("class", "form")
  var input = document.createElement("input");
  input.id = id
  input.placeholder = id
  body.appendChild(div)
  div.appendChild(input)
}
var buttonMaker = function() {
  body.appendChild(button)
  button.addEventListener("click", function() {
    var userName = document.getElementById("name").value;
    var userSign = document.getElementById("sign").value;
    var userHome = document.getElementById("hometown").value;
    var userColor = document.getElementById("color").value;
    aboutMaker(userName, userSign, userHome, userColor)
  });

}

var aboutMaker = function(userName, userSign, userHome, userColor) {
  body.innerHTML = ""
  body.style.backgroundColor = userColor
  var header = document.createElement("header")
  var headline = document.createElement("h1")
  headline.innerText = userName
  body.appendChild(header)
  header.appendChild(headline)
  var mainDiv = document.createElement("div")
  mainDiv.setAttribute("id", "main")
  var leftDiv = document.createElement("div")
  leftDiv.setAttribute("id", "left")
  var rightDiv = document.createElement("div")
  rightDiv.setAttribute("id", "right")
  var sign = document.createElement("p")
  sign.innerText = userName + " has a sign of " + userSign + "."
  var home = document.createElement("p")
  home.innerText = userName + " hails from " + userHome + "."
  body.appendChild(mainDiv)
  mainDiv.appendChild(leftDiv)
  mainDiv.appendChild(rightDiv)
  leftDiv.appendChild(sign)
  rightDiv.appendChild(home)

}
divPInput("name")
divPInput("sign")
divPInput("hometown")
divPInput("color")
buttonMaker()

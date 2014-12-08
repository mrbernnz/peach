## Callbacks

#### foreach
```js
var a = [1, 5, 10, 12];
var cb = function(num) {
  var triple = num*3;
  console.log(triple);
}
a.forEach(cb);
```

```js
var colors = {
  jack: "purple",
  jill: "white",
  jan: "peach",
  joe: "silver"
}
var colorKeys = Object.keys(colors);
var cb = function(person) {
  console.log(person + " likes the color " + colors[person]);
}
colorKeys.forEach(cb)
```

#### setInterval
```js
var cb = function() {
  console.log("hey!");
}
setInterval(cb, 1000);
```

## Events

#### DOM Event Listeners
```js
var cb = function() {
  alert("yo!");
}
var button = document.querySelector("button");
var inputBox = document.querySelector("input");

button.addEventListener("click", cb);
input.addEventListener("keydown", cb);
```

#### Reading in Input
```js
var cb = function(data) {
  var strData = data.toString().trim();
  console.log("you typed " + strData);
}
process.stdin.on("data", cb);
```

#### Networking
```js
var cb = function(socket) {
  console.log("client connected!");
}
server.on("connection", cb)
```

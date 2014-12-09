## Client Websockets

```js
var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");

ws.on("open", function () {
  console.log("Connected to server.");
});
```

#### Sending data to the server
```js
ws.send(message);
```

#### Receiving data from the server
```js
ws.on("message", function(message) {
  //message is the data from teh server
});
```

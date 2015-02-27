#### Create an http server

```js
var http = require ('http');
var server = http.createServer(function(request, response){
  console.log("the url is " + request.url);
  response.end("Hello World")
})
server.listen(2000)
```

#### Test your http server in the terminal (Cool Kids trick)

```
curl localhost:2000
```

#### Reading from a file

```js
var fs = require('fs');

fs.readFile("somefile.txt", function(err, data) {
  if (err) {
    console.log("oh no!");
    console.log(err);
  } else {
    var text = data.toString();
    console.log(text);
  }
})
```

#### Writing to a file

```js
var fs = require('fs');

var txt = "hello";

fs.writeFile("blah.txt", txt, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log("it worked!")
  }
});
```

#### History server sample code
```js
var WSS = require('ws').Server;
var server = new WSS({port: 3000});

var history = [];

server.on("connection", function(ws) {
  ws.on("message", function(msg) {
    history.push(msg);
  });
  var historyMsg = history.join("\n");
  ws.send(historyMsg);
})
```

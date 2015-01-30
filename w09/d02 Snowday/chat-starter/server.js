var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 3000});
var connections = [];

console.log('listening on port 3000');

//removes a specific ws connection from
//the connections array
var deleteWS = function(websocket) {
  for(var i=0; i< connections.length; i++) {
    var c = connections[i];
    if (c === websocket) {
      //delete this ws from the connections array
      connections.splice(i, 1);
    }
  }
}

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log(message);
    connections.forEach(function(elem) {
      if (elem !== ws) {
        elem.send(message);
      }
    })
  });

  ws.on('close', function() {
    deleteWS(ws);
    console.log('client closed');
  })

  console.log('client connected');
  connections.push(ws);
});

//allow the server to send messages too
process.stdin.on('data', function (data) {
  var msg = data.toString().trim();

  connections.forEach(function(elem) {
    elem.send(msg);
  })
});

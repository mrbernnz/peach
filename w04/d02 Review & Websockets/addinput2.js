// var str = "jack,jill";
// var arr = str.split(",");
// //arr is now ["jack", "jill"]

// function add
//
// takes two numbers as parameters
// returns the sum of the parameters
// use this function to process standard input
//
// prompt the user for two numbers: "Please enter in two numbers with a space inbetween"
// use split to break the input into 2 numbers
// print back to the user the sum of the two numbers
// if the user enters 2 3 you should print out 5

// Websocket version
//
// write a websocket server that processes a client's input in the same way

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  ws.on("message", function(message)
  {
    var arr = message1.toString().split(' ');
    var addin = parseInt(arr[0]) + parseInt(arr[1]);
    // console.log(arr);
    console.log(message + " was sent and " + addin + " was the sum.");
    ws.send(addin.toString());
    ws.send("Please enter in two numbers with a space inbetween");
  })
  ws.send("Please enter in two numbers with a space inbetween");
});

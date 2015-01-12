# Excercise: HTTP server review

Write an http server that responds with "Hello World" to the user when you go to http://localhost:2000, and responds with "phooey" on anything else.

# Exercise: Echo server
Write an http server. When you go to http://localhost:2000/say/something, it will return everything after /say.  In this example, it will respond with "something"
If you don't have /say, respond with "Please go to http://localhost:2000/say/something"

#Solutions
##Mine
```js
var http = require ("http");
var msg = ""
var server = http.createServer(function(request,response)
{
    console.log(request.url.split[1])
    if (request.url.split[1] === "/say"){
        console.log(request.url.split[2] === "/something")
    
        if (request.url.split[2]){
        msg = "Hello World"
        }
    }
    else{
        msg = "Please go to http://localhost:2000/say/something"
    }
response.end(msg);
});
server.listen(2000);

// Server File

var http = require("http");
var msg = "";
var server = http.createServer(function(request, response){

 var path = request.url;
 //creates a new array
 var arr = path.split("/")

 //if this index equals say
 if (arr[1] === "say") {
   msg = arr[2]; //print the next index
 } else {
   msg = "Phooey"
 }

 response.end(msg);

});

server.listen(2000);
```
###Andrew's
```js
var http = require("http");
var msg = "";
var server = http.createServer(function(request, response){

 var path = request.url;
 //creates a new array
 var arr = path.split("/")

 //if this index equals say
 if (arr[1] === "say") {
   msg = arr[2]; //print the next index
 } else {
   msg = "Phooey"
 }

 response.end(msg);

});

server.listen(2000);
```


// var filename = process.argv[2];
// var newfilename = process.argv[3];
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response)
{
  // path = request.url;
  fs.readFile("someFile.txt",function(err,data)
  {
    response.end(data);
  });
})
server.listen(2000)

// alternative way to listen for
// var http = require("http");
// var fs = require("fs");
// http.createServer(function(request,response)
// {
//   // path = request.url;
//   fs.readFile("someFile.txt",function(err,data)
//   {
//     response.end(data);
//   });
// }).listen(2000)

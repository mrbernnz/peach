
// var filename = process.argv[2];
// var newfilename = process.argv[3];
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response)
{
  console.log(request.url);
  if (request.url==="/")
  {
    fs.readFile("index.html",function(err,data)
    {
      response.end(data.toString());
    });
  }
  else
  {
    fs.readFile(request.url.slice(0,1),function(err,data)
    {
      response.end(data);
    });
  }
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
//     response.end(data.toString());
//   });
// }).listen(2000)

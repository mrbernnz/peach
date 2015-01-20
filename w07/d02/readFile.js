var ejs = require('ejs');
var fs = require('fs');
var http = require('localhost:3000')

var server = http.createServer(function(request,response)
{
var str = fs.readFileSync('index.ejs','utf8');
var rendered = ejs.render(str, {(name:),(image:)})
response.end(rendered);
});

server.lisen(3000);
console.log('listening on port 3000');


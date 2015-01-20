var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');
app.get('/:width/:height', function(req, response) {
var str = fs.readFileSync('./html/index.ejs', 'utf8');
  var path1 = req.params.width;
  var path2 = req.params.height;
  var page = [];
  for (var i = 0; i < 16; i++) {
    page.push("http://placekitten.com/g/" + path1 + "/" + path2);
    i++;
  };
  var rendered = ejs.render(str, {name: "HELLO CAT LOVERS",image: page});
  response.end(rendered);
});
app.listen(3000);

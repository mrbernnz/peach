## Basic sinatra
```rb
require 'sinatra'

get '/' do
  "<h1>hello world</h1>"
end
```

## Looping to build up html
```rb
get '/' do
  mystring = "<html><body><ul>"
  mystring += "<li>sonny</li>"
  mystring += "<li>cher</li>"
  mystring += "</ul></body></html>"
  return mystring
end
```

## Looping in an erb

```html
<html>
<body>
<ul>
  <% names.each do |name| %>
  <li><%=name%></li>
  <% end %>
</ul>
</body>
</html>
```

## Placekitten

```html
<html>
<body>
<img src="http://placekitten.com/g/200/300">
<img src="http://placekitten.com/g/200/400">
<img src="http://placekitten.com/g/300/400">
<img src="http://placekitten.com/g/300/300">
</body>
</html>
```

## Basic ERB
```rb
You have <%= applecount %> apples!
<% if (applecount >= 5) %>
  That is a lot of apples!
<% end %>
```

## Basic EJS  
```js
You have <%= applecount %> apples!
<% if (applecount >= 5) { %>
  That is a lot of apples!
<% } %>
```

## Rendering in EJS
```js
var ejs = require('ejs');
var fs = require('fs');

//read in our template file into a string
var str = fs.readFileSync('/apple.ejs', 'utf8');
var rendered = ejs.render(str, {applecount: 10});

console.log(rendered);
```

## Basic Node HTTP
```js
var http = require('http');

var server = http.createServer(function(req, res){
  res.end('<h1>Hello World!</h1>');
});

server.listen(3000);

console.log('listening on port 3000!');
```

## Basic Express
```js
// make sure that you npm install express --save
var express = require('express')
var app = express();

app.get('/', function(req, res){
  res.send('<h1>Hello World!</h1>');
});

app.listen(3000);

console.log('listening on port 3000!');
```

## Express with parameters
```js
var express = require('express')
var app = express();

app.get('/:name', function(req, res) {
  var name = req.params.name;
  res.send("<h1>Hello " + name + "</h1>");
});
```

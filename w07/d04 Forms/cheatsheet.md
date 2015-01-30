# Forms

## Basic Form
index.erb
```html
<!DOCTYPE>
<html>
  <body>
    <form action = "/button_click">
      <button>Click Me</button>
    </form>
  </body>
</html>
```

## On a Sinatra Server

```ruby
require 'sinatra'

get '/' do
  erb :index
end

get '/button_click' do
  '<h1>You have clicked the button!'
end
```

## Sending Parameters to the Server:
```html
<!DOCTYPE>
<html>
  <body>
    <form action = "/button_click">
      <input type = "text" name = "name" >
      <button>Click Me</button>
    </form>
  </body>
</html>
```

```ruby
require 'sinatra'

get '/' do
  erb :index
end

get '/button_click' do
"<h1>Hello, #{params[:name]}</h1>"
end
```

## Using an ERB:
```ruby
require 'sinatra'

get '/' do
  erb :index
end

get '/button_click' do
  erb :name, locals: { name: params[:name] }
end
```
name.erb

```html
<!DOCTYPE>
<html>
  <body>
    <h1>Hello, <%= name %></h1>
  </body>
</html>
```

## Using an Express (JS) server

```js
var express = require('express')
var app = express();
var ejs = require('ejs');

app.get('/', function(req, res) {
  res.render('index.ejs');
  });

app.get('/button_click', function(req, res){
  res.render('name.ejs', { name: req.query.name});
});

app.listen(3000);

console.log('listening on port 3000!');
```

EJS files are the same as ERB, but with .ejs extensions

## Using one Route:
(on Sinatra)
```ruby
get '/' do
  erb :index, locals: {name: params[:name] }
end
```
index.erb
```html
<!DOCTYPE>
<html>
  <body>
    <% if name %>
      <h1>Hello, <%= name %></h1>
    <% end %>
    <form action = "/">
      <input type = "text" name = "name" >
        <button>Click Me</button>
    </form>
  </body>
</html>
```

(on Express)
```js
var express = require('express');
var app = express();
var ejs = require('ejs');

app.get('/', function(req, res) {
  var name_param;
  if(req.query.name !== undefined) {
    name_param = req.query.name;
  }
  res.render('index.ejs', { name: name_param });
});

app.listen(3000);

console.log('listening on port 3000!');
```

index.ejs
```html
<!DOCTYPE>
<html>
  <body>
    <% if (typeof(name) !== 'undefined') { %>
      <h1>Hello, <%= name %></h1>
    <% } %>
    <form action = "/">
      <input type = "text" name = "name" >
      <button>Click Me</button>
    </form>
  </body>
</html>
```

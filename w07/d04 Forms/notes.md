#Notes
```html
<body>
  <form action="/buton_click">
    <button>Click Me</click>
  </form>
</body>
```

```ruby
get '/button_click' do
  '<h1>You have clicked the button</h1>'
end
```

```ruby
require 'sinatra'
get '/button_click' do
  "<h1>Hello, #{params[:name]}</h1>"
end

get '/' do
    erb:index
end
```

```js
app.get('/button_click'function(req,res){
    res.rend('name.ejs',{name: req.query.name});
});
```

```html
<% if name %>
<h1>Hello, <%=name%></h1>
<%end%>
<form action="/">
<input type="text" name="name">
</form>
```

```ruby
get '/' do
    name_param = params[!name]||nil
    erb :index, locals:{name: name_param}
```

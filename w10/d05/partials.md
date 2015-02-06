## partials, yield, layout
go to views/layouts/application.html.erb

this is basically the master html.erb file for our app.

see yield? that's where our html.erb files have been going! want more yields? do this:
in layouts/application.html.erb:

```
<%= yield :footer %>
```

in index.html.erb
```
<% content_for :footer do %>
  <p>copyright millions of peaches</p>
  <% end %>
```

PARTIALS:
what if you have a piece of page that goes into some pages but not all? partials, baby, partials.

first, make the snippet of a page. THE UNDERSCORE IS REQUIRED IN TEH FILE NAME, BUT NOT USED IN THE RENDER COMMAND
_header.html.erb:

```html
<h1>HOLY CRAP I'M A HEADER</h1>
```

now put it in a file in views/posts:

```html
<%= render "layouts/header" %>
```





## RENDERING ETC
in your controller you can render more things!

These override layouts and whatnot.

plain text?!? like for realsies?
```ruby
render plain: "well this is boring, yet effective, i guess"
```

there's straight up html as a string:
```ruby
render html: "<h1>woah</h1>".html_safe
```

OMG ERB
```ruby
render inline: "<% @posts.each do |x| %> <h2><%= x.content %> </h2><% end %>"
```

JSON FTW
```ruby
json_stuff = {key: "value"}
render json: json_stuff
```

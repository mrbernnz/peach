#RUBYrrito
Write a Sinatra server that responds to the following paths thusly:
- /tortilla/rice should send a headline (meaning a h1 tag, naturally) that has the text "MMMMM".  
- /tortilla/guac should respond with the headline "AHHHH!".
- /tortilla/[ANYTHING] should respond with "Well, [ANYTHING] is good on a tortilla, too." between paragraph tags.
- Any other path should return an h3 tag that has the text "Sorry, we only serve burritos here!"

Hint:
```ruby
get '/path/more_path' do
```

#Solutions
###Mine
```rb
require "sinatra"

# Method erb and you pass the parameter :index
get '/' do
  erb(:index, locals: {name:"Phish"})
end
get '/tortilla/rice' do
  # if you want to just tab the variable
  msg = "MMMMM"
  rice = "ice"
  puts "/tortilla/r#{rice}"
  erb(:index, locals: {name: msg})
end
get '/tortilla/guac' do
  # if you want to just tab the variable
  msg = "AHHHH"
  guac = "uac"
  puts "/tortilla/g#{guac}"
  # puts "/tortilla/guac"
  erb(:index, locals: {name: msg})
end
get '/tortilla/""' do
  # if you want to just tab the variable
  puts anything
  anything = "/tortilla/''"
  msg = "Well, [ANYTHING] is good on a tortilla, too."
  erb(:index, locals: {name: msg})
end
```

##Index.erb
```rb
<!-- localhost:4567 -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sinatra</title>
</head>
<body>
  <h1><%=name%></h1>
</body>
</html>
```
###Andrew's Server Notes
```rb
#tells computer hey we are going to be using sinatra
#sinatra uses port 4567
require 'sinatra'

get '/:id' do

 erb(:index, locals:{text: "Sorry, we only serve burritos here!"})

end

get '/tortilla/:id' do

 path = params[:id]

 if path == "rice"
   erb(:index, locals:{text: "MMMMM"})
 elsif path == "guac"
   erb(:index, locals:{text: "AHHH!"})
 else
   erb(:index, locals:{text: "Tortilla", p: "Well, #{path} is good on a tortilla, too."})
 end

end
```

```rb
#Sinatra is just like websockets / http - install globally on your machine, but you will have to reinstall on your DO

#Sinatra likes to have a directory

# /blue_eyes
#    /views
#      index.erb
#    server.rb

# .erb files take html syntax - embedded ruby file
# allows you to use two additional tags

# <head>
#  < %= variable % >

# we will be sending something into this variable
#sinatra uses port 4567
require 'sinatra' #tells computer hey we are going to be using sinatra

my_name = "Andrew"

get '/' do #grabbing the path
 erb(:index, locals:{name: my_name}) #grabs the index.erb file (sinatra method that takes in parameter of the filename and looks in the views folder for it)
 #also takes the locals hash that can use name as a key and a variable as a value
end
```

##Objectives
CRUD w/ RESTful routes
```ruby
# server.rb
require 'sinatra'
require 'pry'

pets = {
  0 => {
    id: 0,
    name: 'Fluffy',
    type: 'hamster'
  }
}
counter = 1

get '/pets' do
  erb :index, locals: {pets: pets}
end
post '/pet' do
  newpet = {
    id: counter,
    name: params['name'],
    type: params['type']
  }
  pets[counter] = newpet
  counter += 1
  redirect '/pets'
end

get '/pet/:id' do
  thispet = pets[params[:id].to_i]
  erb :show, locals: {thispet: thispet}
end
put '/pet/:id' do
  pet = pets[params[:id].to_i]
  pet[:name] = params['newname']
  redirect '/pets'
end
delete '/pet/:id' do
  pets.delete(parasm[:id].to_i)

put '/pet/:id' do
  pet=pets[params[:id].to_i]
  pet[:name] = params["newname"]
  redirect '/pets'
end

delete '/pet/:id' do
  pets.delete(params[:id].to_i)
  redirect '/pets'
end
```
```html
<!-- index.erb -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<html>
<body>
  <header>
    <h1>petulance</h1>
  </header>
  <ul>
    <% pets.each do |key, pet| %>
      <li><%= pet[:name] %> is a <%= pet[:type] %>. This pet has a id of <a href="/pet/<%= pet[:id] %>"><%= pet [:id] %></a>.</li>
    <% end %>
  </ul>
  <h3>Add a pet here:</h3>
  <form action="/pet" method="post">
    <input type="text" name="name" placeholder="pet name" required>
    <input type="text" name="type" placeholder="pet type" required>
    <button>ADD IT!!</button>
  </form>
  </ul>
</body>
</html>
```
```html
<!-- show.erb -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pets</title>
</head>
<html>
<body>
  <header>
    <h1>petulance</h1>
    <a href="/pets">go home</a>
  </header>
  <p><%= thispet[:name] %> is a <%= thispet[:type] %></p>
  <h3>Change <%= thispet[:name] %>'s name here:</h3>
  <form action="/pet/<%= thispet[:id] %>" method="post">
    <input type="hidden" name="_method" value="put">
    <input type="text" name="newname" placeholder="what's their new name?" required>
    <button>UPDATE THIS!!!</button>
  </form>
  <p><%= thispet[:name] %> can be removed here:</p>
  <form action="/pet/<%= thispet[:id] %>" method="post">
    <input type="hidden" name="_method" value="delete">
    <button>DELETE IT!!</button>
  </form>
</body>
</html>
```

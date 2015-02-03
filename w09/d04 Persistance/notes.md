server.rb(only changes!!!)
```ruby
# RESTful routes with a database
require 'sqlite3'
db = SQLite3::Database.new 'petulance.db'
get '/pets' do
  pets = db.execute('SELECT * FROM pets;')
  erb :index, locals: {pets: pets}
end
post '/pet' do
  newpet = [params['name'],params['type']]
  db.execute('INSERT INTO pets (name,type) VALUES(?,?);',newpet)
  redirect '/pets'
end
get '/pet/:id' do
  thispet = db.execute('SELECT * FROM pets WHERE id=(?);',params[:id].to_i)
  erb :show, locals: {thispet: thispet}
end
put '/pet/:id' do
  db.execute('UPDATE pets SET name=(?) WHERE id=(?);', params['newname'],params['id'].to_i)
  redirect '/pets'
end
delete '/pet/:id' do
  db.execute('DELETE FROM pets WHERE id=(?);',params[:id].to_i)
  redirect '/pets'
end
```
index.erb
```html
<!-- index.erb -->
<html>
<head>
    <title></title>
</head>
<body>
  <ul>
    <% pets.each do |pet| %>
    <li><%= pet[1] %> is a <%= pet[2] %></li>
    <%= pets[0][1] %>
    <%end%>
  </ul>
</body>
</html>

<!-- show.erb -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    id: <%= thispet[0][0] %>
    name: <%= thispet[0][1] %>
    type: <%= thispet[0][2] %>
</body>
</html>
```

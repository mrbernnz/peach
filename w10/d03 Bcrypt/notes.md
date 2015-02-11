```js
var bcrypt = require('bcrypt'){
// inside app.post
else {
        var hash = bcrypt.hashSync(formPassword,10);
        db.run('INSERT INTO users (username,password) VALUES(?,?)',username,hash,function(err,row){
            })
    }
//
db.get('SELECT * FROM users WHERE username=?', username, function(err, row){
    if (err){throw err}
    if (row){var password_matches = bcrypt.compareSync(password,row.password);
        if (password_matches){req.session.valid_user = true;};
    };
    });
```
```ruby
require 'bcrypt'
require 'sinatra'
# require 'json'

my_password = BCrypt::Password.create('my password')
use Rack::Session::Pool, :cookie_only => false

secret_password = ''
json = ''
# File.open('secret.json', 'r') do |f|
#  f.each_line do |line|
#    json << line
#  end
# end
json_hash = JSON.parse(json)
secret_password = json_hash['password']


def authenticated?
  session[:valid_user] == true
end

get '/' do
  send_file 'index.html'
end

post '/session' do
  if params[:password] === secret_password
    session[:valid_user] = true
    redirect '/secret_page'
  else
    redirect '/'
  end
end

get '/secret_page' do
  if authenticated?
    return 'Hello! <a href = "http://localhost:4567/secret_page2">Secret Page 2</a>'
  else
    redirect '/'
  end
end

get '/secret_page2' do
  if authenticated?
    return 'Hello! <a href = "http://localhost:4567/secret_page">Secret Page</a>'
  else
    redirect '/'
  end
end
```
```ruby
require 'bcrypt'
my_password = BCrypt::Password.create(params['password']) # make sure you have confirme this password before encrypting

my_password == params['password']


if BCrypt::Password.new(row.password)==my_password # checks against stored password after grabbing the row with the username
session[:valid_user]=true
my_password == params['password']

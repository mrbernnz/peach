## The Road to Login/Authentication
**References**
* [Sessions in Express](https://github.com/expressjs/session)
* [Sessions in Sinatra](https://developer.github.com/guides/basics-of-authentication)

#### Part 1: What's the secret?

* Create a server (express or sinatra) with the routes:
  * `GET /` Give the user a form where they enter in a secret password in order to go to the main page. The form should submit the secret as a `GET` request to `/login`
  * `GET /login` If the secret passed to this route is correct, then redirect to `/secret_page`. If the secret passed is incorrect then redirect back to `/`.
    * You can redirect in express like this: `res.redirect('/someroute')`
  * `GET /secret_page` say Hello! and provide a link to `/secret_page2`.
  * `GET /secret_page2` say Hello Again! and provide a link back to `/secret_page`.

##### Questions
1. Can you figure out how to bypass the login to get to `/secret_page`? How about `/secret_page2`?
2. How could we possibly secure those secret pages?

#### Part 1b: Read in your secret from a JSON file
If you were to push the previous code to Github you probably would be showing the world the secret password. There's a smarter way to do this.

1. Create a file `secret.json` with the following format
    ```
    {
     "password": "secret-goes-here"
    }
    ```

2. Create a `.gitignore` file and add to it `secret.json`
3. In your server simply load this file in with `var secret = require('./secret.json');`
 * We have to do `./secret.json` rather than `secret.json` because it is a local file. `./` just means "in the directory I'm in"
4. Whenever you need to use the secret password in code, use `secret.password`.

```js
var express = require('express');
var secret = require('./secret.json');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', function(req, res) {
  if(req.query.password === secret.password) {
    res.redirect('/secret_page');
  } else {
    res.redirect('/');
  }
});

app.get('/secret_page', function(req, res) {
    res.send('Hello!  <a href = "http://localhost:3000/secret_page2">Secret Page 2</a>');
});

app.get('/secret_pag2', function(req, res) {
    res.send('Hello Again! <a href = "http://localhost:3000/secret_page">Secret Page</a>');
});

app.listen(3000);

console.log('Listening on port 3000');

```

```html
<!DOCTYPE>
<html>
  <body>
    <form action = "/login">
      <input type = "text" name = "password">
      <button>submit</button>
    </form>
  </body>
</html>

```

#### Part 2: Sessions
* First change the `GET /login` route to be `POST /session`. This is a RestFUL way of saying "Create a new session".
* On `POST /session` add the key `valid_user` to the session object with the value `true` if the secret is valid. If the secret is not valid you should still redirect to `/login`
* Change `/secret_page` and `/secret_page2` to check the `valid_user` key on the session object. If it is not set to true, redirect the user back to `/` to login.

```js
var express = require('express');
var session = require('express-session');
var secret = require('./secret.json');
var bodyParser = require('body-parser')


var app = express();

app.use(session({
  secret: secret.password,
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/session', function(req, res) {
  if(req.body.password === secret.password) {
    req.session.valid_user = true;
    res.redirect('/secret_page');
  } else {
    res.redirect('/');
  }
});

app.get('/secret_page', function(req, res) {
  if(req.session.valid_user) {
    res.send('Hello!  <a href = "http://localhost:3000/secret_page2">Secret Page 2</a>');
  }
  else {
    res.redirect('/');
  }
});

app.get('/secret_page2', function(req, res) {
  if(req.session.valid_user) {
    res.send('Hello Again! <a href = "http://localhost:3000/secret_page">Secret Page</a>');
  }
  else {
    res.redirect('/');
  }
});

app.listen(3000);

console.log('Listening on port 3000');

```
```html
<!DOCTYPE>
<html>
  <body>
    <form action = "/session" method = "POST">
      <input type = "text" name = "password">
      <button>submit</button>
    </form>
  </body>
</html>
```

In Sinatra:
```rb
require 'sinatra'
require 'json'

use Rack::Session::Pool, :cookie_only => false

secret_password = ''
json = ''
File.open('secret.json', 'r') do |f|
  f.each_line do |line|
    json << line
  end
end
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
#### Part 3: Real User Passwords
* Change the `/` page so that there are two forms.
  * One form to create a new user that has a `username`, `password` and `confirm_password`. This should submit to `POST /user`. This is a RestFUL way of saying "Create a new user".
  * A second form for an existing user to login with just a `username` and `password`. This should submit a `POST` request to `/session` in order to create a session.
* `POST /user`
  * If `password` and `confirm_password` don't match redirect the user to `/`
  * Otherwise add a new user to a `User` table with that `username` and `password`. Give the user a session with a `valid_user` key (like in `/session`) and redirect them to `/secret_page`
* `POST /session`
  * Check to see that there is a user in the `User` table that matches the passed in `username` and `password`. If so redirect them to `/secret_page` with a `valid_user` session key, if not redirect them to `/`


```js
var express = require('express');
var session = require('express-session');
var secret = require('./secret.json');
var bodyParser = require('body-parser');
var sqlite3 = require("sqlite3").verbose();


var db = new sqlite3.Database("authentication_exercise.db");
var app = express();

app.use(session({
  secret: secret.password,
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/user', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var confirm_password = req.body.confirm_password;

  if(password != confirm_password) {
    res.redirect('/');
  } else {
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", username, password, function(err) {
      if(err) { throw err; }
      else{
        req.session.valid_user = true;
        res.redirect('/secret_page');
      }
      });
  }
});

app.post('/session', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  db.get("SELECT * FROM users WHERE username = ? AND password = ?", username, password, function(err, row) {
          if(err) { throw err; }
          if(row) {
              req.session.valid_user = true;
              req.user = row.username;
              res.redirect('/secret_page');
            } else {
              res.redirect('/');
            }
          });
        });

app.get('/secret_page', function(req, res) {
  if(req.session.valid_user) {
    res.send('Hello!  <a href = "http://localhost:3000/secret_page2">Secret Page 2</a>');
  }
  else {
    res.redirect('/');
  }
});

app.get('/secret_page2', function(req, res) {
  if(req.session.valid_user) {
    res.send('Hello Again! <a href = "http://localhost:3000/secret_page">Secret Page</a>');
  }
  else {
    res.redirect('/');
  }
});

app.listen(3000);

console.log('Listening on port 3000');
```

```html
<!DOCTYPE>
<html>
  <body>
    <h1>Create a User</h1><br />
    <form action = "/user" method = "POST">
      Username: <input type = "text" name = "username"><br />
      Password: <input type = "password" name = "password"><br />
      Password Confirmation: <input type = "password" name = "confirm_password"><br />
      <button>Sign Up</button>
    </form>
    <br /><br />
    <h1>Sign In</h1>
    <form action = "/session" method = "POST">
      Username: <input type = "text" name = "username"><br />
      Password: <input type = "password" name = "password"><br />
      <button>Sign In</button>
  </body>
</html>
```

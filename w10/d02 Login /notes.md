###Topic
- OAuth

```html
<!-- in views folder/index.html -->
<form action='login' method='GET'>
  <input name='password'>

<!-- secret.html -->
<h1>shhh</h1>
```
```js
// in server.js
var secret = 'penguin'
app.get('/',function(req,res){
    res.sendFile('/public', __dirname + '/index.html');
    });
get '/'
get '/login'
    if (params['password']=== secret){
        res.redirect('/secret_page')
    }
    else {
        res.redirect('/')
    }
get '/secret_page'
```
```js
var secret = 'penguin'
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
    });
// get '/'

get '/login'
    if (params['password']=== secret){
        res.redirect('/secret_page')
    }
    else {
        res.redirect('/')
    }
get '/secret_page'
```
####Sessions
```js
// place session above app.get
var express = require('express');
var secret = require('./secret.json');
var session = require('express-session');
var app = express();
app.use(session({
    secret: secret.password,
    resave: false,
    saveUninitialized: true,
    valid_user: true
    });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})
app.get('/login', function (req, res) {
  if (req.query.password===secret.password) {
    req.session.valid_user = true;
    res.redirect('/secret_page');
  } else{
    res.redirect('/');
  };
});
app.get('/secret_page',function (req,res) {
  res.send('Hello! <a href="/secret_page2">secret_page2</a>');
});
app.get('/secret_page2',function (req,res) {
  res.send('Hello Again! <a href="/secret_page">secret_page</a>');
});
```
####SQLite in JavaScript (Review)
```
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('<database_name>.db');
// to run SQL commands in javascript
db.run('INSERT INTO users (username, password') VALUES(?,?)',
username, password, function(err){
    if (err){throw err;};
    else {};
    });
db.run('SELECT * FROM users WHERE username = ? AND password = ?', username, password, function(err){
    if (err){throw err;};
    if (row){redirect to secret_page};
    else {};
    });

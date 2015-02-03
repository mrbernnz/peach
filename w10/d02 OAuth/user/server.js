var express = require('express');
var session = require('express-session');
var bodyParser require('body-parser'); // require values within a HTML file
var sqlite3 = require('sqlite3');
va db = new sqlite3.Database('auth_exercise.db');
var app = express();
app.use(bodyParser.urlencoded({extend: false}););
app.use(session({
    secret: 'slow_sleep',
    resave: false,
    saveUninitialized: true,
  }); 

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/d02\ OAuth/public/index.html');
});

app.post('/user',function (req,res) {
    db.run('INSERT INTO user (username,password) VALUES(?,?)',username,password,function (err) {
    if (err) {throw err};
    else{
      req.session.valid_user = true;
      res.redirect('/user')
    };
  });
});

app.post('/session',function(req,res) {
  db.get('SELECT * FROM user WHERE username=? AND password=?',username,password,function (err,row) {
    if (err) {throw err};
    if (row) {
      req.session.valid_user = true;
      res.redirect('/secret_page')};
    else{res.redirect('/')};
  });
}); 

app.get('/secret_page', function(req, res) {
    if (req.session.valid_user) {
      res.send('Hello! <a href="/secret_page2">secret_page2</a>');
    }; else {
      req.redirect('/');
    };
  }); 

app.get('/secret_page2', function(req, res) {
    if (req.session.valid_user) {
      res.send('Hello Again! <a href="/secret_page">secret_page</a>');
    }; else {
      req.redirect('/');
    };
  });

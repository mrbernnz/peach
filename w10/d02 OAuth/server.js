var express = require('express');
var secret = require('./secret.json');
var session = require('express-session');
var app = express();
app.use(session({
    secret: secret.password,
    resave: false,
    saveUninitialized: true,
    valid_user: true
  }); app.get('/', function(require) {
    res.sendFile(__dirname + '/public/index.html');
  }); app.post('/session', function(req, res) {
    if (req.body.password === secret.password) {
      req.session.valid_user = true;
      res.redirect('/secret_page');
    } else {
      res.redirect('/login');
    };
  }); app.get('/secret_page', function(req, res) {
    if (req.session.valid_user) {
      res.send('Hello! <a href="/secret_page2">secret_page2</a>');
    } else {
      req.redirect('/');
    };
  }); app.get('/secret_page2', function(req, res) {
    if (req.session.valid_user) {
      res.send('Hello Again! <a href="/secret_page">secret_page</a>');
    } else {
      req.redirect('/');
    };
  });

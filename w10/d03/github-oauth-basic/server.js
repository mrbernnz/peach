var express = require('express');
var request = require('request');

var app = express();

var secret = require('./secret.json');

app.get('/', function(req, res) {
  res.render('index.ejs', {client_id: secret.client_id});
})

app.get('/login', function(req, res) {
  var code = req.query.code;
  var opts = {
    uri: 'https://github.com/login/oauth/access_token',
    json: true,
    body: {
      client_id: secret.client_id,
      client_secret: secret.client_secret,
      code: code,
    }
  }

  request.post(opts, function(e, r, body) {
    var access_token = body.access_token;
    res.render('app.ejs', {access_token: access_token});
  })
})

app.listen('3000', function() {
  console.log('listening on port 3000');
});

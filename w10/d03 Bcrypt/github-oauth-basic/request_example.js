var request = require('request');

// If you have gone throuh the OAuth 2.0 Flow
// and now have an access token, then you can
// always make OAuth dependent API calls from
// the server (rather than from ajax)

var access_token = 'put oauth access token here';
var opts = {};
opts.uri = 'https://api.github.com/user';
opts.json = true;
opts.headers = {
  'User-Agent': 'request',
  'Authorization': 'token ' + access_token,
}
request(opts, function(e,r,body) {
  console.log("Your Github Login is '" + body.login + "'");
})

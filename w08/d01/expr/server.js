// var express = require('express');
// var request = require('request');
// var url = 'http://api.randomuser.me/';
// request(url,function(error,response,body) {
//   if(!error && response.statusCode == 200) {
//     var data = JSON.parse(body);
//     console.log(data.results[0]);
//     console.log(data.results[0].user.name.first); /*syntax specific*/
//   };
// });
var express = require('express');
var app = express();
var request = require('request');/*be careful to not overide 'parameter' in app.get*/
app.get('/', function(req, res) /*you will never use req, unless you are grabbing information from the header*/
{
  var url = 'http://api.randomuser.me/';
    request(url, function(error, response, body) 
    {
      if (!error && response.statusCode === 200) 
      {
        var data = JSON.parse(body);
        var person = 
        {
          first: data['results'][0]['user']['name']['first'],
          last: data['results'][0]['user']['name']['last'],
          email: data['results'][0]['user']['email'],
          username: data['results'][0]['user']['username']
        };
        res.json(person);
      };
  });
});

var server = app.listen(3000, function() {
  console.log('server running on 3000')
});

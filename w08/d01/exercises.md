## Tuesday
### Objectives
You will be able to:

1. Use bundler and Gemfiles
2. Use Pry to debug Ruby programs
3. Serve JSON from the server (Express & Sinatra)  
4. Hit a public API from the server  

## Bundler and Gemfiles
First install `bundler`
```
gem install bundler
```

Then make a Gemfile
```
touch Gemfile
```

```rb
source 'https://rubygems.org'

gem 'pry'
```

#### Bundle vs package.json comparison (from cheatsheet)

**Ruby/Bundler/Gemfile**
* `bundle init`: Initialize a Gemfile
* Edit `Gemfile`: Add a dependency
* `bundle install`: Install all listed dependencies

**NPM/package.json**
* `npm init`: Initialize a package.json
* `npm install [package-name] --save`: Add a dependency
* `npm install`: Install all listed dependencies

## pry

in your Gemfile
```rb
gem 'pry'
```

in your code
```rb
require 'pry'

#then somewhere in your code just...
binding.pry
#and you will enter into a repl
```

## Exercise: Hit your own Hello World API
* Create an html file that will make an AJAX call to the Hello World API that you constructed previously
* **Hint:** The only difference between this and hitting an external API is the url
* **Listen UP:**
  * If you just open your html file in the browser you will get the error `XMLHttpRequest cannot load http://localhost:4567/. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.`
  * You need to put your `index.html` in a public folder for Sinatra to serve up. Access this html file from `http://localhost:4567/index.html`

## Exercise: Basic API
##### Part 1: an array in JSON
Create the route `/top_theaters`
  * should return an array in JSON of the top grossing movies out in theatres
  * sample response:
  ```
  ["Ace Ventura", "Dumb and Dumber", "The Mask"]
  ```

##### Part 2: more complicated responses
Create the route `/top_dvd`
  * should return the top selling dvds, and the RottenTomatoes rating of each dvd
  * Construct your reponse to be of this form:
  ```
  { "results": [
    {"Jurassic Park": 9},
    {"Superman": 2},
    {"Inception": 8}
  ]}
  ```

## Exercise: HTTParty Setup
1. make a new directory
2. `bundle init`
3. Add to your Gemfile:
  ```rb
  gem httparty
  gem pry
  ```

4. Make the following file
  ```rb
  require 'HTTParty'
  require 'pry'
  url = "http://api.randomuser.me/"
  response = HTTParty.get(url)
  binding.pry
  # now inspect response
  ```

5. Run this file and you should end up at a `pry` prompt

## Exercise: Request and RandomUser
1. Make a new directory
2. `npm init`
3. `npm install --save request`
4. create a js file and start with the following code from the "request" section of your cheatsheet
  ```js
  var request = require('request');
  var url = "http://someurl";
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      data = JSON.parse(body)
      console.log(data);
    }
  })
  ```

5. adapt this file to hit the RandomUser api and console.log the entire parsed response
6. change the code to print out just the RandomUsers first name and age


## Exercise: Clean up RandomUser output
* Use the `request` package to create your own randomuser route in express that returns one object in JSON with only a few properties of a randomuser
* You can do this in express or sinatra.

**Hints:**
* You will still be hitting the RandomUser API, just on the server
* Instead of sending back to the client exactly what RandomUser gives you, you need to put the properties of one random user in just one object, and return that one object

```js
var express = require('express');
var request = require('request');

var app = express();

app.get('/', function(req, res) {
  var url = 'http://api.randomuser.me/';
  var personJSON;

  request(url, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      var data = JSON.parse(body);
      var person = data['results'][0]['user'];
      personJSON = {
        firstName: person['name']['first'],
        lastName: person['name']['last'],
        email: person['email'],
        username: person['username']
      };
      res.json(personJSON);
    }
  });
});

var server = app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
```

## Exercise: Create your own RandomUser API endpoint
* In Express create one route that returns in JSON the properties of a random user.
* **Do not** use the RandomUser API, for this exercise you will be making random users on your own.


```js
var express = require('express');
var app = express();
var names = ["Jack", "Sayid", "Kate", "Hurley", "Sun", "Aaron"]
var hometown = ["Los Angeles", "Tikrit", "Ames", "Miami", "Seoul", "The Island"]
var dob = ["1969/12/03", "1967/08/15", "1977/05/08", "1978/12/28", "1980/03/20", "2004/11/01"]

var rando = function(array) {
  return array[Math.floor(Math.random()*array.length)]
};

app.get('/', function(req, res) {
  hash = {
    name: rando(names),
    hometown: rando(hometown),
    dob: rando(dob)
  };
  res.json(hash)
});
//the next part wasn't in the instructions, but here it is anyways!
app.get('/name', function(req, res) {
  res.json({name: rando(names)})
});

app.get('/hometown', function(req, res) {
  res.json({hometown: rando(hometown)})
});

app.get('/dob', function(req, res) {
  res.json({dob: rando(dob)})
});

var server = app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
```

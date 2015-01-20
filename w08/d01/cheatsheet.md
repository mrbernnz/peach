
## APIs

* randomuser API
  * endpoint: http://api.randomuser.me/
  * ruby: `response["results"][num]["user"]["email"]`
  * docs: https://randomuser.me/
* reddit
  * endpoint: http://www.reddit.com/r/funny/.json
  * ruby: `response["data"]["children"][num]["data"]["selftext"]`
  * JS: `response.data.children[num].data.selftext`
* Giffy
  * endpoint: http://api.giphy.com/v1/gifs/search?q=funny%20cat&api_key=dc6zaTOxFJmzC
  * ruby: `response["data"][num]["images"]["original"]["url"]`
  * docs: https://github.com/giphy/GiphyAPI
* omdb
  * endpoint http://omdbapi.com/?t=Top%20Gun
  * ruby: `response.Title`
  * NOTE: HTTParty doesn't automatically parse its json


## Gemfiles
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

gem 'httparty'
```

#### Ruby/Bundler/Gemfile vs NPM/package.json

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

## Consuming an API server-side

### HTTParty (ruby)
```rb
require 'HTTParty'
var response = HTTParty.get("http://someurl")
```

### Request (node)
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

## Creating JSON reponses

### Sinatra
```rb
# this would be at the end of a route
content_type :json
var data = { :key1 => 'value1', :key2 => 'value2' }
data.to_json
```

### Express
```js
res.send({ user: 'roger'});
//or
res.json({ user: 'roger'});
```


# From Friday...

## AJAX
```js
var url = "http://someurl"
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.addEventListener('load', function(e) {
  console.log(xhr.responseText)
});
xhr.send();
```

## AJAX (JQuery)
```js
$.ajax({
  url: 'http://api.randomuser.me/',
  dataType: 'json',
  success: function(data){
    console.log(data);
  }
});
```

## URI encoding

#### Ruby
```ruby
require 'uri'
movie_name = "Top Gun"
url_safe = URI.encode(movie_name)
#url_safe is Top%20Gun
```

#### JS
```js
var movie_name = "Top Gun"
var url_safe = encodeURI(movie_name);
//url_safe is Top%20Gun
```

## HTTParty
```rb
require 'HTTParty'
var response = HTTParty.get("http://someurl")
```

## Request
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
gem 'pry'
```


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

## Creating JSON reponses

#### Sinatra
```rb
# this would be at the end of a route
content_type :json
{ :key1 => 'value1', :key2 => 'value2' }.to_json
```

#### Express
```js
res.send({ user: 'roger'});
```

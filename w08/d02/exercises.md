#### Get a Google Maps API Key
- Some APIs require the user to register for an API key, which ensures that the API isn't being used improperly
- You will need a Google account
- Go to: https://developers.google.com/maps/documentation/javascript/tutorial#api_key
  - Follow steps 1-4

Create an HTML page with the following:  
```html
<!DOCTYPE>
<html>
  <head>
    <style type="text/css">
      #map-canvas { height: 600px; width: 800px;}
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR API KEY HERE"></script>
  </head>
  <body>
    <div id="map-canvas"></div>
    <script>
      var mapOptions = {
        center: { lat: 40.7127, lng: -74.0059},
        zoom: 11
      };
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    </script>
  </body>
</html>
```

Open this in a browser.  You should see a Google Map centered on New York City.

#### Exercise: Maps Prompt
- Create an html page that will prompt the user for a latitude and a longitude.
- Render the location with that lat and long in a Google Maps using the Google Maps API.

#### Exercise: Coordinate RandomUser with google maps API
Write a command line application in ruby that:
- Consumes the randomuser api to get a random city and state
- Consumes the google maps api to get the latitude and longitude of the random user's city and state.
- Don't forget gsub so names with spaces will work when hitting the google api.
- go [here](https://developers.google.com/maps/documentation/geocoding/#JSON) for help with getting lat and long.


#### Exercise: get familiar with instagram
- go [here](http://instagram.com/developer/register/#) to register for an instagram api key.
- go [here](http://instagram.com/developer/endpoints/tags/#) to learn about how to find instagram pictures by tag name.
- instagram's documentation calls for you to use "access_token=A LONG NUMBER" in the url when you consumer their api, however you should replace that with "client_id=YOUR CLIENT ID"
- write a server that hits instagram's api and returns all images with a certain tag.
- the tag should be hardcoded into your server.
- the pictures should show up on index.erb


#### Exercise: See the World
Write a Sinatra app that does the following:
  - On index.erb, have a form to get a city and state from the user.
  - At this point the browser should refresh with a new page showing pictures taken in and around that city.
  - On your server, use HTTParty to hit instagram's api (you'll need your key!) and get pictures taken near said city.
  - Instagram requires longitude and latitude, so we better hit google's api (you'll need your key!) to get those coordinates for the city.
  - Have the pictures populate on results.erb.

in views/index.erb:

<html>
<body>
<h1>You'll gram it in an instant!</h1>

<form action="/city" method="GET">
<input type="text" name="city" placeholder="city, state">
<button>Let's go!</button>

</body>
</html>
in views/results.erb:

<html>
<body>
<h1>Here are the results for <%= tag %>! You can also
<a href="/">search again.</a>
</h1>
<%= pics %>
</body>
</html>
in server.rb:

require 'HTTParty'
require 'sinatra'

get("/") do
erb(:index)
end

get("/city") do
location = request.params["city"]
location = location.gsub(" ", "+")

googresponse = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{location}&key=AIzaSyCUDbbdZqgnvYm0LmOJAXlm_lJKTOERRYg")

lat = googresponse["results"][0]["geometry"]["location"]["lat"]
long = googresponse["results"][0]["geometry"]["location"]["lng"]

response = HTTParty.get("https://api.instagram.com/v1/media/search?lat=#{lat}&lng=#{long}&client_id=8fe4db31e3a940068664c1e7e3c5c061")

picArr = []
response["data"].each do |x|
picArr<<"<li><img src='#{x["images"]["standard_resolution"]["url"]}'></li>"
end

pics = "<div><ul>" + picArr.join('') + "</ul></div>"

erb(:results, {locals: {tag: request.params["city"], pics: pics}})
end

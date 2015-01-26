1. Create a sinatra server that has a route of /:lat/:lng
2. Have it render an ERB that displays that lat + lng
3. Use the google maps API (surprise!) in the ERB to render a map at those coordinates.
    - Use yesterday's code for refernce.(week 8 day 2 exercise.md in the peach repo)
    - You will need your API key for google.
    - Assume that there are only integers in the path
    - You don't need to worry about failure cases.
```rb
require 'sinatra'
require 'httparty'
get '/:lat/:long' do
  lat = params[:lat]
  lng = params[:long]
  erb(:index, locals:{lat: lat, lng: lng)
end
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Assessment</title>
    <style type="text/css">
      #map-canvas { height: 600px; width: 800px;}
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYEvZl6I5vJ6tSVutlF2EF9qsPcOexswA"></script>
</head>
<body>
  <input id="lat" type="text"><%= lat %></input>
  <input type="text" id="long"><%= lng %></input>
  <script>
        var mapOptions = {
        center: { lat: document.getElementById('lat')), lng: document.getElementById('long'))},
        zoom: 11
      };
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  </script>
</body>
</html>
```

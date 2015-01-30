require 'pry'
require 'HTTParty'

response = HTTParty.get('http://api.randomuser.me')
city = response['results'][0]['user']['location']['city']
location = city.gsub(' ', '+')
res = HTTParty.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=AIzaSyCYEvZl6I5vJ6tSVutlF2EF9qsPcOexswA')
locale = res['results'][0]['geometry']['location']
binding.pry

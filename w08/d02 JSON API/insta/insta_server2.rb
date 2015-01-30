require 'sinatra'
require 'httparty'



get '/' do
  erb(:index2)
  # city = document.querySelector('input')
  # response = HTTParty.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=AIzaSyCYEvZl6I5vJ6tSVutlF2EF9qsPcOexswA')
  # end
  # erb(:index2, locals:{image:page})
end

get '/city' do
  location = request.params['city']
  location = location.gsub(' ', '+')
  googleresponse = HTTParty.get('https://maps.googleapis.com/maps/api/geocode/json?address=#{location}&key=AIzaSyCYEvZl6I5vJ6tSVutlF2EF9qsPcOexswA')
  lat = response['results'][0]['geometry']['location']['lat']
  lng = ['results'][0]['geometry']['location']['lng']
  response = HTTParty.get('instagram api lat and long')

page = []

pics = '<div><ul>' + picArr.join('') + '</ul></div>'
erb(:results, {locals: {tag: request.params['city'], pics: pics}})
end

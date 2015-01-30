require 'sinatra'
require 'httparty'
page = []


get '/' do
  response = HTTParty.get('https://api.instagram.com/v1/tags/nohairdontcare/media/recent?client_id=03bc56793b474dcc8f6cbfb66e6b50a9')
  picture = response['data']
  picture.each do |response|
    page.push(response['images']['standard_resolution']['url'])
  end
  erb(:index, locals:{name:"HELLO INSTASCAM!", image:page})
end


require 'pry'
# num = 5
# binding.pry
# num = 8

require 'sinatra'
# require 'JSON'
# get '/' do
#   content_type :json
#   data = {messsage: "Hello World"}
#   data.to_json
# end

# get '/' do
#   content_type :json
#   data = ["Ace Ventura", "Dumb and Dumber", "The Mask"]
#   data.to_json
# end

# get '/' do
#   content_type :json
#   data = { "results" => [
#     {"Jurassic Park" => 9},
#     {"Superman" => 2},
#     {"Inception" => 8}
#   ]}
#   data.to_json
# end

require 'httparty'
# url = 'http://api.randomuser.me'
# response = HTTParty.get(url)
# binding.pry


get '/' do
  content_type :json
  url = 'http://api.randomuser.me/'
  response = HTTParty.get(url)
  # person = response['results'][0]['user']
  person = {
    first: response['results'][0]['user']['name']['first'],
    last: response['results'][0]['user']['name']['last'],
    email: response['results'][0]['user']['email'],
    username: response['results'][0]['user']['username']
  }
  person.to_json
end

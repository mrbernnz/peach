# localhost:4567

require 'sinatra'
# get '/button_click' do
#   "<h1>Hello, #{params[:name]}</h1>"
# end

# get '/' do
#     erb :index
# end


get '/' do
  erb :index
end
get '/button_click' do
  erb :name, locals: {name: params[:name]}
end

require "sinatra"

# Method erb and you pass the parameter :index
get '/' do erb(:index, locals: {name:"Phish"}) end

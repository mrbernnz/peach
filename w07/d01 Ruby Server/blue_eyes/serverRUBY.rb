require "sinatra"

# Method erb and you pass the parameter :index
get '/' do
  erb(:index, locals: {name:"Phish"})
end
get '/tortilla/rice' do
  # if you want to just tab the variable
  msg = "MMMMM"
  rice = "ice"
  puts "/tortilla/r#{rice}"
  erb(:index, locals: {name: msg})
end
get '/tortilla/guac' do
  # if you want to just tab the variable
  msg = "AHHHH"
  guac = "uac"
  puts "/tortilla/g#{guac}"
  # puts "/tortilla/guac"
  erb(:index, locals: {name: msg})
end
get '/tortilla/""' do
  # if you want to just tab the variable
  puts anything
  anything = "/tortilla/''"
  msg = "Well, [ANYTHING] is good on a tortilla, too."
  erb(:index, locals: {name: msg})
end

get '/:id' do
  # case someone enters a path your not prepared for
  puts params
  path=(params[:id])
  erb(:index, locals: {name: path})
end

get '/google' do
  str = "<a href='www.google.com'>google</a>"
  erb(:index,locals:{name:str})
end

#doing operations inside of a get
get '/:id' do
  path=(params[:id])
  path_num=params[:id].length
  counter = 0
  repeated = ""
  while counter<path_num do
      repeated+=path
      counter+=1
  end
  erb(:index, locals:{name:repeated})
end


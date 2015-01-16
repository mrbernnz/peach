require 'sinatra'

items = []

get '/' do
  erb(:todo, locals: {items: items}) # no items yet
end

post '/add' do
  items.push(params[:item])
  erb(:todo, locals: {items: items})
end

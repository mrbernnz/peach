require 'sinatra'
require 'pry'

pets = {
  0 => {
    id:0,
    name:"Fluffy",
    type:"hamster"
  }
}
counter = 1

get '/pets' do
  erb :index, locals: {pets: pets}
end

post '/pet' do
  newpet = {
    id: counter,
    name: params["name"],
    type: params["type"]
  }
  pets[counter] = newpet
  counter += 1
  redirect '/pets'
end

get '/pet/:id' do
  thispet = pets[params[:id].to_i]
  erb :show, locals: {thispet: thispet}
end

put '/pet/:id' do
  pet=pets[params[:id].to_i]
  pet[:name] = params["newname"]
  redirect '/pets'
end

delete '/pet/:id' do
  pets.delete(params[:id].to_i)
  redirect '/pets'
end

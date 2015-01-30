require 'sinatra'
require 'sinatra/reloader'
require_relative './lib/connection'
require_relative './lib/house'
require_relative './lib/character'
require 'pry'


after do
  ActiveRecord::Base.connection.close
end

get("/") do
  erb(:index)
end

get("/characters") do
  erb(:"characters/index", { locals: { characters: Character.all(), } })
end

get("/characters/new") do
  erb(:"characters/new", { locals: { houses: House.all(), } })
end

post("/characters") do
  character_hash = {
    name: params["name"],
    image_url: params["url"],
    house_id: params["house_id"]
  }

  Character.create(character_hash)

  erb(:"characters/index", { locals: { characters: Character.all() } })
end

get("/characters/:id") do
  character = Character.find_by({id: params[:id]})
  erb(:"characters/show", { locals: { character: character } })
end

get("/characters/:id/edit") do
  character = Character.find_by({id: params[:id]})
  erb(:"characters/edit", { locals: { character: character, houses: House.all() } })
end

put("/characters/:id") do
  character_hash = {
    name: params["name"],
    image_url: params["url"],
    house_id: params["house_id"]
  }

  character = Character.find_by({id: params[:id]})
  character.update(character_hash)

  erb(:"characters/show", { locals: { character: character } })
end

delete("/characters/:id") do
  character = Character.find_by({id: params[:id]})
  character.destroy

  redirect "/characters"
end

get("/houses") do

  erb(:"houses/index", { locals: { houses: House.all() } })
end

get("/houses/:id") do
  house = House.find_by({id: params[:id]})
  erb(:"houses/show", { locals: { house: house } })
end

# localhost:4567
require 'pry'
require 'sinatra'
require 'json'

# adds a new pet with the specific name and type
# returns in JSON the object {"status": "Success!"}
get '/create/:pet_name/:pet_type' do
  pet = []
  pets = [{results: pet}]
  status = {status: 'Success'}
  pet_name = params[:pet_name]
  pet_type = params[:pet_type]
  pet.push({pet_name: pet_name,pet_type: pet_type})
  puts pet
  content_type :json
  status.to_json
end

# returns an object with one key of a pet's name. If no pet exists with this name then return an empty object.
get '/read/:pet_name' do
  content_type :json
  pet_name = params[:pet_name]
  pet = pets['results']
  empty = {};
  if pet_name == pet['pet_name']
    pet.to_json
  else
    empty.to_json
  end
end

# changes the name of a pet. returns in JSON the object {status: 'Success!'}
get '/update/:pet_name/:new_pet_name' do
  content_type :json
  pet_name = params[:pet_name]
  pet = pets['results']
  if pet_name == pet['pet_name']
end

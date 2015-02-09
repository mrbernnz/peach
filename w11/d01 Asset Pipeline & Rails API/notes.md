app/assets/javascripts/
app/assets/stylesheets/
---
<!-- none created assets go into vendor directory -->
vendor/assets/javascripts/
vendor/assets/stylesheets/

```ruby
# index route
class PetsController < ApplicationController
  protect_from_forgery with: :null_session #bypass for edit, update, and delet routes

  def index
    @pets = Pet.all
    # return JSON or HTML
    respond_to do |format|
    #localhost:3000/pets
      format.html { render :index }
      # localhost:3000/pets.json
      format.json { render json: @pets } 
      end
    end
  def show
    @pet = Pet.find_by(id: params[:id])
    if @pet
      render json: @pet
    else 
      render status: 400, nothing: true
    end
  end
  def create
  @pet = Pet.create(pet_params)
    if @pet.save
      render json: @pet
    else 
      render status: 400, nothing: true
    end
end
```


class PetsController < ApplicationController
	protect_from_forgery with: :null_session

def index
	@pets = Pet.all
	respond_to do |format|
  # http://localhost:3000/pets
  format.html { render :index }
  # http://localhost:3000/pets.json
  format.json { render json: @pets }
	end
end

def new
	@pet = Pet.new
end

def create
	@pet = Pet.create(pet_params)
	if @pet
		respond_to do |format|
			format.html { redirect_to @pet }
			format.json { render json: @pet}
		end
	else
		render status: 400, nothing: true
	end
end

def show
	@pet = Pet.find_by(id: params[:id])
	if @pet
		respond_to do |format|
    # http://localhost:3000/pets
    format.html { render index: @pet}
    # http://localhost:3000/pets.json
    format.json { render json: @pet}
  end
	else
		render status: 400, nothing: true
	end
end

def edit
	@pet = Pet.find_by(id: params[:id])
end

def update
	@pet = Pet.find_by(id: params[:id])
	if @pet
		@pet.update_attributes(pet_params)
		respond_to do |format|
    # http://localhost:3000/pets
    format.html { redirect_to @pet}
    # http://localhost:3000/pets.json
    format.json { render json: @pet}
 	 	end
	else
		render status: 400, nothing: true
	end
end

def destroy
	@pet = Pet.find_by(id: params[:id])
	if @pet
		@pet.destroy
		respond_to do |format|
    # http://localhost:3000/pets
    format.html { }
    # http://localhost:3000/pets.json
    format.json { render json: {}}
  	end
	else
		render status: 400, nothing: true
	end
	redirect_to pets_path
end




private
def pet_params
	params.require(:pet).permit(:name, :pet_type)
end
end
class PetsController < ApplicationController 
  protect_from_forgery with: :null_session

  def index
    @pets = Pet.all
    respond_to do |format|
      format.html { render :index }
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

  def update
    @pet = Pet.find_by(id: params[:id])
    if @pet.update(pet_params)
      render json: @pet
    else
      render status: 400, nothing: true
    end
  end

  def destroy
    @pet = Pet.find_by(id: params[:id])
    if @pet.destroy
      render json: {}
    else
      render status: 400, nothing: true
    end
  end

  private 
  def pet_params
    params.require(:pet).permit(:name, :pet_type)
  end
end

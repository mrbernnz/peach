class BedsController < ApplicationController
  def index
    @bed = Bed.all
  end

  def new
    @bed = Bed.new
  end

  def create
    @bed = Bed.create(beds_params)
    redirect_to bed_path(@beds)
  end
  def show
    @bed = Bed.find_by(id: params[:id])
  end
  def destroy
    @bed = Bed.find_by(id: params[:id])
    @bed.destroy
    redirect_to beds_path
  end
  def edit
    @bed = Bed.find_by(id: params[:id])
  end
  def update
    @bed = Bed.find_by(id: params[:id])
    @bed.update(beds_params)
    redirect_to beds_path(beds_params)
  end

  private
  def beds_params
    params.require(:bed).permit(:mattress, :sheets, :pillows)
  end

  def find_model
    @model = Bed.find(params[:id]) if params[:id]
  end
end

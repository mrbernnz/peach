class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @books = Book.find_by(id: params[:id])
  end
  def edit
    @books = Book.find_by(id: params[:id])
  end
  def update
    @books = Book.find_by(id: params[:id])
    @books.update(book_params)
    redirect_to @books
  end


  private
  def book_params
    params.require(:book).permit(:title, :author, :status)
  end

  def find_model
    @model = Books.find(params[:id]) if params[:id]
  end
end

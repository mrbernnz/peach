class PostsController < ApplicationController
  def index
    # show all posts here
  end

  def new
    # show the new post form here
  end

  def create
    # create a new post here using params passed from a form
    # send the user to show so they can see their new post
  end

  def show
    #select one post by its id and display it
  end

  def destroy
    # identify which post to destroy
    # destroy the post

    # redirect to index
  end

  def edit
    # send the correct post to the edit page by using the post id
  end

  def update
    # grab the post to update by getting the id from the submitted form
    # update the post

    # redirect to the show page of this post so the user can see their changes
  end

  private
  def post_params
    # allow params to be entered and used from post form
  end
end

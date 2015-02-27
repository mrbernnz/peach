# Rails Intro

## Pre-requisites
`gem install rails`  
This installs Rails and lets us create new Rails apps  

`rails new zoo`  
This creates an application called petBook.  

`bundle install`

This installs all the gems associated with your app.
## Exploring Rails
`cd zoo` and look around.

`Gemfile` contains all of our Gems for our project.
Notice that we're using Rails, sqlite3, and a handful of other defaults that we won't be covering this morning.
In the future, we can feel free to add useful Gems or remove unwanted defaults from this file. For now, let's just move onto some other files and directories.

Our `app` directory contains all of our assets (Javascript, CSS, and image files), our models, our views, and our controllers.  We will be spending most of our time in here.

Our `db` directory contains a seed file that we can use to seed our database, if we want.

`public` contains static files that are independent of our views.
This used to be used a lot more before `app/assets` was introduced.

`test` contains automated tests.

This is a high level view of Rails directory structure.  I've left some things out, but we won't need them today.

Let's start up a Rails server!

Run `rails server`

Our rails server is now running on port 3000.
This is the default.  We can change it with `-p 3001`, but let's stick with the default.

Go to http://localhost:3000 in your browser.

Yay! We have a Rails app!
This is kind of boring.  Let's add our first model.

# Creating a model

We are going to create a `Pet` model.  Pets will have a `name`(text) and a `pet_type`(text).

Kill the server (`Ctrl-C`) before running the following command:  
`rails generate model Pet name:text pet_type:text`

This creates a model for us.  
We can view this model in `app/models/pet.rb`

If we look at this model, we'll see
```rb
class Pet < ActiveRecord::Base
end
```
Not very exciting, but it creates an ActiveRecord model (like we've been using for the last week or so).

That last command also created a database migration.
Database migrations allow us to make changes to the database (such as adding tables, removing tables, adding columns, etc.)
They also allow us to rollback changes if we need to.

Let's look at the one that was just created.
It will be in `db/migrate/<timestamp>_create_pets.rb`
That timestamp is the time that the migration was created.

```rb
class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.text :name
      t.text :pet_type

      t.timestamps null: false
    end
  end
end

```

This is a subclass of `ActiveRecord::Migration`.  It already knows how to do everything that a migration is supposed to do. When we run the migration, it will call the change method.  The change method will call create a table called `pets` and give it a `name` column with a type of text and a `pet_type` column with a type of text.

It also adds a unique `id` column (type integer) and `created_at` and `updated_at` for free!

We HAVE to run this migration in order to create the table and actually use our model.

We can run it with the following command:
`rake db:migrate`.

Rake is a build tool that comes with Rails and allows us to run automated tasks, such as the migration we just ran.

When we run `rake db:migrate`, it runs all the migrations that haven't been run before (in this case, just the one we made).

So now we have our model, but what can we do with this model?
We can play with it in Rails console.

What is Rails console?  It's an intepreter (like IRB).
In fact, it IS IRB, but with our Rails environment loaded into it.

We can start this with `rails console`.
Type `Pet.create(name: 'Fluffy', pet_type:'hamster')`

Now we have a Pet in our database!

But there's a better, more efficient way to do this.  
Open up `db/seeds.rb`.  This file is used to generate "seeds" or data for your database.  

Add something to it like:
`Pet.create(name: "Salty", pet_type: "cat")`

We can add as many records as we'd like to this.

Now run `rake db:seed`
We won't see any output (if our code is correct), but our database is now seeded with pets.

So how do we view this in the browser?

First we have to create routes for our app.

# Routes

Open up `config/routes.rb`

This file will contain our routes. It also has some basic documentation and examples of how to create routes.

Inside the block, add the following:

`resources :pets`

What did this do?
We can see what routes are available in our app by using `rake routes` in the terminal.

It just created all of our RESTful CRUD routes for us! YAY!

Before we leave the routes file, add the following to the top of that block (above our `resources :pets`:  

  `root 'pets#index'`

  This tells Rails that the "root" of our app is in the "pets" controller in the "index" action.

  Start up the rails server again (`rails server`)

  Go to http://localhost:3000.

  Oh no!  We have an error!
  `uninitialized constant PetsController`

  Rails looked in the routes file and saw that we want to start off at the index action of the pets controller.  But we don't have a pets controller!  Let's make one.

  # Controllers

  Make a new file in `app/controllers` called `pets_controller.rb`
  Add the following to it:
  ```rb
  class PetsController < ApplicationController
  end
  ```

  This creates a Pets controller (which inherits a bunch of stuff from ApplicationController, which is part of Rails).

  Now reload the page.

  Oh no! Another error!

  `The action 'index' could not be found for PetsController`

  Oh!  It can't find an `index` action on `PetsController`.  We can fix this!

  Add the following method to `PetsController`:  
  ```rb
  def index
  end
  ```

  Now reload the page.  Another error!

  Now it's looking for a view, which is just an ERB file associated with our controller and action.  Let's create one!

  # Views

  Create a directory in `app/views` called `pets`.  Inside of that `pets` directory, create a file called `index.html.erb`

  Add the following to it:

  ```
  <h1>Welcome to my zoo!</h1>
  <% @pets.each do |pet| %>
  <p><%= pet.name %> is a <%= pet.pet_type %></p>
  <% end %>
  ```

  Reload the page.  Now we'll get another error:  
  `NoMethodError in Pets#index`.  It tried to render our page, but `@pets` is undefined.  We can set instance variables for the view in our controller action.
  Add the following to the `index` method in `pets_controller.rb`:

  `@pets = Pet.all`

  Remember, `Pet.all` will get all the Pet objects from the database.  Setting them to @pets will allow us to reference all of these Pets in the view.

  Now reload the page.

  We finally have something!

  How would we go about creating a pet in the view?

  # Creating an Edit Pet Page

  Create a file in the `app/views/pets/` directory called `new.html.erb`.
  Inside that file, add the following:

  ```
  <%= form_for @pet, url: {action: 'create'} do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>
  <br /><br />

  <%= f.label :pet_type %>
  <%= f.text_field :pet_type %>
  <br /><br />


  <%= f.submit %>
  <% end %>

  ```

  Now go to http://localhost:3000/pets/new

  You'll get an ArgumentError because we never sent an `@pet` to the page.
  So go to our pets controller (`app/controllers/pets_controller.rb`) and add an action for `new`:

  ```rb
  def new
    @pet = Pet.new
  end
  ```

  Now reload the page.  Ta-Da! There's our form.  
  Go ahead and fill it out and try to submit it.

  You get an error that it couldn't find the create action on PetsController.  
  Ok, let's create that.

  ```rb
  def create
    @pet = Pet.create(pet_params)
    redirect_to @pet
  end

  private
  def pet_params
    params.require(:pet).permit(:name, :pet_type)
  end
  ```
  So this seems like a lot.  First we create a pet in the database with our params.  Then we redirect to a pet.  This will take us to the show page for the pet we just created.

  Then we have a method called `pet_params` that allows us to set all these attributes on the new model.  In a nutshell, Rails won't let us set a bunch of attributes at once.  This makes it harder for people to change things they aren't supposed to.

  So if we reload again, we'll see that we need to create a show action.  This will show a specific pet.

  In the PetsController, add the following:  
  ```rb
  def show
    @pet = Pet.find_by(id: params[:id])
  end
  ```

  If we reload, we'll see that we need a template.  We can do that!

  Create a file inside `app/views/pets` called `show.html.erb`.

  Inside that file, put the following:

  ```
  <p><%= @pet.name %> is a <%= @pet.pet_type %></p>
  ```

  Now if we reload the page, we'll see our individual pet.
  We can change the id in the URL bar, and see different pets in our app.

  # Linking Everything Together
  Let's update our index page to link to our individual pets, and our create page.

  Update our `app/views/pets/index.html.erb` to look like this:

  ```
  <h1>Welcome to my zoo!</h1>
  <% @pets.each do |pet| %>
  <p><%= link_to pet.name, pet %> is a <%= pet.pet_type %></p>
  <% end %>

  <br /><br />
  <%= link_to 'Create a new pet!', new_pet_path %>
  ```

  `link_to` is a view helper provided by Rails that takes a string (in this case pet.name), and a url.  If you just give it a model, it will go to the show page for that model.  Otherwise, you can give it a path (like what you see on the left side in `rake routes`.  

  Now let's update our edit page to go back to the end of our index page.  
    Add the following to our `app/views/pets/new.html.erb`

  ```
    <%= link_to 'cancel', pets_path %>
  ```

  That will link our edit page back to our pets index.

  Finally, add the following to the bottom of our `app/views/pets/show.html.erb` file:
  ```
    <br />
    <%= link_to 'back', pets_path %>
    ```

  Now we can navigate our app.  We can create new pets, see all existing pets, and see an individual pet.  

  We have the C and R of CRUD.  Let's work on the D (Destroy) portion next.

  # Deleting a Pet

  In our `app/views/pets/show.html.erb` file, add the following to the bottom of the view:
  ```
    <br /><br />
    <%= link_to 'delete', @pet, method: :delete %>
  ```

  and go to an individual pet (like http://localhost:3000/pets/1).

  Now click on the "delete" link.

  You know the drill.  We have to create a "destroy" action on our Pets controller.

  Let's add the following to our `app/controllers/pets_controller.rb` file:

  ```rb
    def destroy
      @pet = Pet.find_by(id: params[:id])
      @pet.destroy

      redirect_to pets_path
    end
  ```

  **NOTE:** Put this ABOVE the `private` keyword you used for the `pet_params` method.

  The first thing we do is get the Pet from the database based on the id that was passed in.  Then we call the `destroy` method on that Pet.  `destroy` is an ActiveRecord method for removing something from the database.

  Finally, we redirect to the pets index page.  Remember: You can't redirect back to the Pet show page because that Pet no longer exists!

  So, we now have CR & D.  Next up is U (Update).

  # Updating a Pet

  The first thing we want to do is add a form for editing.

  This will look almost identical to the new pet form we made earlier.

  ```
    <%= form_for @pet, url: {action: 'update'} do |f| %>
    <%= f.label :name %>
    <%= f.text_field :name, value: @pet.name %>
    <br /><br />

    <%= f.label :pet_type %>
    <%= f.text_field :pet_type, value: @pet.pet_type %>
    <br /><br />

    <%= f.submit %>
    <% end %>
    <%= link_to 'cancel', @pet %>
  ```

  Go to your index page and click on one of your pets.
  Add `/edit` to the end of the url and hit enter.

  Oh no! Another ArgumentError!

  Looks like we have to pass a Pet to the edit page!

  Go to your PetsController.  Add the following method (ABOVE `pet_params`):

  ```rb
    def edit
      @pet = Pet.find_by(id: params[:id])
    end
  ```

  Now reload that page.

  Try to make a change to one or more of the values, and click on the "Update Pet" button.

  Once again, we have an unkown action for our PetsController.

  Let's add the update action that it's looking for.

  Add the following to PetsController (ABOVE `pet_params`).

  ```rb
    def update
      @pet = Pet.find_by(id: params[:id])
      @pet.update_attributes(pet_params)

      redirect_to @pet
    end
  ```

  This is very similar to create. We grab the Pet out of the database (based on the id that comes in). Then we update the attributes of that Pet from the form.  `update_attributes` is an ActiveRecord method for updating multiple attributes of an object and then saving them to the database.

  Once again, we need `pet_params` because we need to allow those attributes to be saved.

  If you reload the page (and click "Yes" to the warning about submitting the form), you'll see that your changes have been saved.

  Finally, we should add a link from the show pet page to go to the edit form.

  Open up `app/views/pets/show.html.erb` and add the following (above the delete link):

  ```
    <%= link_to 'edit', edit_pet_path(@pet) %>
  ```

  That's it!  We have a CRUD app!  We can create, read, update, and delete pets on our zoo!

  # Styling

  Let's add some styling to prettify this app.

  We can create a style for our Pet routes in `app/assets/stylesheets/pets.css`.
  Add the following to that CSS file:

  ```css
    a { text-decoration: none }

    body {
      margin-left: 3em;
      font-family: "Helvetica Neue";
    }

    form {
      width: 200px;
      margin-bottom: 1em;
    }

    input[type="text"] {
      float: right;
    }

    #pets, #pet, .pet {
      margin-bottom: 1em;
    }

    .pet {
      padding-bottom: 1em;
      border-bottom: 1px solid lightGray;
    }
  ```

  This CSS file will automatically be included in all Pet related routes.

  To get the full benefits, you'll have to make the following changes:

  In `app/views/pets/index.html.erb`:  
    Wrap the `@pets.each` block in a `<div id = "pets">` and wrap each pet in a `<div class = "pet">`.

  In `app/views/pets/show.html.erb`:  
  Wrap the pet info in a `<div id = "pet">`

  ## Make it more API-ey

  Rails controllers can return JSON from their routes, instead of (or in addition to) HTML.

  Returning JSON can be useful for making an API that your app (or other apps) can hit.  
  This can be very useful for SPA apps (and may be very useful when using front-end frameworks like Backbone).

  Now that our CRUD routes are set up, let's update our Pets controller (`app/controllers/pets_controller.rb`):

  ```rb
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
  end
  ```

  There's a lot going on here.  The `protect_from_forgery` bit is actually required by Rails if we want to use this controller as an API.  Otherwise we get unauthentication issues if we try to create, edit, or delete a Pet via the API.


  `respond_to` will check whether we asked for an .html or .json response, and render the appropriate response.  `render json` will render `@pets` as json.  We also respond to HTML because we want to render the index page from this route if the request comes in as `.html`.


  We can demonstrate this if we start up the server and go to `http://localhost:3000/pets` and then go to `http://localhost:3000/pets.json`.

## EXERCISE:
Change the rest of the controller so it can serve JSON.

SOLUTION:

```rb
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
```


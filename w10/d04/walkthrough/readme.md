# Rails Intro

## Pre-requisites
`gem install rails`  
This installs Rails and lets us create new Rails apps  

`rails new blog`  
This creates an application called blog.  

## Exploring Rails
`cd blog` and look around.

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

We are going to create a `Post` model.  Posts will have a `title`(text), an `author`(text), and `content` (text).

Kill the server (`Ctrl-C`) before running the following command:  
`rails generate model Post title:text author:text content:text`

This creates a model for us.  
We can view this model in `app/models/post.rb`

If we look at this model, we'll see
```rb
class Post < ActiveRecord::Base
end
```
Not very exciting, but it creates an ActiveRecord model (like we've been using for the last week or so).

That last command also created a database migration.
Database migrations allow us to make changes to the database (such as adding tables, removing tables, adding columns, etc.)
They also allow us to rollback changes if we need to.

Let's look at the one that was just created.
It will be in `db/migrate/<timestamp>_create_posts.rb`
That timestamp is the time that the migration was created.

```rb
class CreatePosts < ActiveRecord::Migration
def change
create_table :posts do |t|
t.text :title
t.text :author
t.text :content

t.timestamps null: false
end
end
end

```

This is a subclass of `ActiveRecord::Migration`.  It already knows how to do everything that a migration is supposed to do. When we run the migration, it will call the change method.  The change method will call create a table called `posts` and give it a `title` column with a type of text, an `author` column, with a type of text, and a `content` column (with a type of text).

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
Type `Post.create(title: 'Hello Rails', author:'YOUR NAME', content: 'This is awesome')`

Now we have a Post in our database!

But there's a better, more efficient way to do this.  
Open up `db/seeds.rb`.  This file is used to generate "seeds" or data for your database.  

Add something to it like:
`Post.create(title: "Pizza", author: "Leonardo", content: "is awesome.")`

We can add as many records as we'd like to this.

Now run `rake db:seed`
We won't see any output (if our code is correct), but our database is now seeded with posts.

So how do we view this in the browser?

First we have to create routes for our app.

# Routes

Open up `config/routes.rb`

This file will contain our routes. It also has some basic documentation and examples of how to create routes.

Inside the block, add the following:

`resources :posts`

What did this do?
We can see what routes are available in our app by using `rake routes` in the terminal.

It just created all of our RESTful CRUD routes for us! YAY!

Before we leave the routes file, add the following to the top of that block (above our `resources :posts`:  

  `root 'posts#index'`

  This tells Rails that the "root" of our app is in the "posts" controller in the "index" action.

  Start up the rails server again (`rails server`)

  Go to http://localhost:3000.

  Oh no!  We have an error!
  `uninitialized constant PostsController`

  Rails looked in the routes file and saw that we want to start off at the index action of the posts controller.  But we don't have a posts controller!  Let's make one.

  # Controllers

  Make a new file in `app/controllers` called `posts_controller.rb`
  Add the following to it:
  ```rb
  class PostsController < ApplicationController
  end
  ```

  This creates a Posts controller (which inherits a bunch of stuff from ApplicationController, which is part of Rails).

  Now reload the page.

  Oh no! Another error!

  `The action 'index' could not be found for PostsController`

  Oh!  It can't find an `index` action on `PostsController`.  We can fix this!

  Add the following method to `PostsController`:  
  ```rb
  def index
  end
  ```

  Now reload the page.  Another error!

  Now it's looking for a view, which is just an ERB file associated with our controller and action.  Let's create one!

  # Views

  Create a directory in `app/views` called `posts`.  Inside of that `posts` directory, create a file called `index.html.erb`

  Add the following to it:

  ```erb
  <h1>Welcome to my blog!</h1>
  <% @posts.each do |post| %>
  <h2><%= post.title %></h2>
  <h3>by <%= post.author %></h3>
  <%= post.content %>
  <% end %>
  ```

  Reload the page.  Now we'll get another error:  
  `NoMethodError in Posts#index`.  It tried to render our page, but `@posts` is undefined.  We can set instance variables for the view in our controller action.
  Add the following to the `index` method in `posts_controller.rb`:

  `@posts = Post.all`

  Remember, `Post.all` will get all the Post objects from the database.  Setting them to @posts will allow us to reference all of these Posts in the view.

  Now reload the page.

  We finally have something!

  How would we go about creating a post in the view?

  # Creating an Edit Post Page

  Create a file in the `app/views/posts/` directory called `new.html.erb`.
  Inside that file, add the following:

  ```erb
  <%= form_for @post, url: {action: 'create'} do |f| %>
  <%= f.label :title %>
  <%= f.text_field :title %>
  <br /><br />

  <%= f.label :author %>
  <%= f.text_field :author %>
  <br /><br />

  <%= f.label :content %>
  <%= f.text_area :content %>
  <br /><br />

  <%= f.submit %>
  <% end %>

  ```

  Now go to http://localhost:3000/posts/new

  You'll get an ArgumentError because we never sent an `@post` to the page.
  So go to our posts controller (`app/controllers/posts_controller.rb`) and add an action for `new`:

  ```rb
  def new
  @post = Post.new
  end
  ```

  Now reload the page.  Ta-Da! There's our form.  
  Go ahead and fill it out and try to submit it.

  You get an error that it couldn't find the create action on PostsController.  
  Ok, let's create that.

  ```rb
  def create
  @post = Post.create(post_params)
  redirect_to @post
  end

  private
  def post_params
  params.require(:post).permit(:title, :author, :content)
  end
  ```
  So this seems like a lot.  First we create a post in the database with our params.  Then we redirect to a post.  This will take us to the show page for the post we just created.

  Then we have a method called `post_params` that allows us to set all these attributes on the new model.  In a nutshell, Rails won't let us set a bunch of attributes at once.  This makes it harder for people to change things they aren't supposed to.

  So if we reload again, we'll see that we need to create a show action.  This will show a specific post.

  In the PostsController, add the following:  
  ```rb
  def show
  @post = Post.find_by(id: params[:id])
  end
  ```

  If we reload, we'll see that we need a template.  We can do that!

  Create a file inside `app/views/posts` called `show.html.erb`.

  Inside that file, put the following:

  ```erb
  <h2><%= @post.title %></h2>
  <h3>by <%= @post.author %></h3>
  <%= @post.content %>
  ```

  Now if we reload the page, we'll see our individual post.
  We can change the id in the URL bar, and see different posts in our app.

  # Linking Everything Together
  Let's update our index page to link to our individual posts, and our create page.

  Update our `app/views/posts/index.html.erb` to look like this:

  ```erb
  <h1>Welcome to my blog!</h1>
  <% @posts.each do |post| %>
  <h2><%= link_to post.title, post %></h2>
  <h3>by <%= post.author %></h3>
  <%= post.content %>
  <% end %>

  <br /><br />
  <%= link_to 'Create a new post!', new_post_path %>
  ```

  `link_to` is a view helper provided by Rails that takes a string (in this case post.title), and a url.  If you just give it a model, it will go to the show page for that model.  Otherwise, you can give it a path (like what you see on the left side in `rake routes`.  

    Now let's update our edit page to go back to the end of our index page.  
    Add the following to our `app/views/posts/new.html.erb`

    ```erb
    <%= link_to 'cancel', posts_path %>
    ```

    That will link our edit page back to our posts index.

    Finally, add the following to the bottom of our `app/views/posts/show.html.erb` file:
    ```erb
    <br />
    <%= link_to 'back', posts_path %>
    ```

    Now we can navigate our app.  We can create new posts, see all existing posts,
    and see an individual post.  

    We have the C and R of CRUD.  Let's work on the D (Destroy) portion next.

    # Deleting a Post

    In our `app/views/posts/show.html.erb` file, add the following to the bottom of the view:
    ```erb
    <br /><br />
    <%= link_to 'delete', @post, method: :delete %>
    ```

    and go to an individual post (like http://localhost:3000/posts/1).

    Now click on the "delete" link.

    You know the drill.  We have to create a "destroy" action on our Posts controller.

    Let's add the following to our `app/controllers/posts_controller.rb` file:

    ```rb
    def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy

    redirect_to posts_path
    end
    ```

    **NOTE:** Put this ABOVE the `private` keyword you used for the `post_params` method.

    The first thing we do is get the Post from the database based on the id that was passed in.  Then we call the `destroy` method on that Post.  `destroy` is an ActiveRecord method for removing something from the database.

    Finally, we redirect to the posts index page.  Remember: You can't redirect back to the Post show page because that Post no longer exists!

    So, we now have CR & D.  Next up is U (Update).

    # Updating a Post

    The first thing we want to do is add a form for editing.

    This will look almost identical to the new post form we made earlier.

    ```erb
    <%= form_for @post, url: {action: 'update'} do |f| %>
    <%= f.label :title %>
    <%= f.text_field :title, value: @post.title %>
    <br /><br />

    <%= f.label :author %>
    <%= f.text_field :author, value: @post.author %>
    <br /><br />

    <%= f.label :content %>
    <%= f.text_area :content, value: @post.author %>
    <br /><br />

    <%= f.submit %>
    <% end %>
    <%= link_to 'cancel', @post %>
    ```

    Go to your index page and click on one of your posts.
    Add `/edit` to the end of the url and hit enter.

    Oh no! Another ArgumentError!

    Looks like we have to pass a Post to the edit page!

    Go to your PostsController.  Add the following method (ABOVE `post_params`):

    ```rb
    def edit
    @post = Post.find_by(id: params[:id])
    end
    ```

    Now reload that page.

    Try to make a change to one or more of the values, and click on the "Update Post"
    button.

    Once again, we have an unkown action for our PostsController.

    Let's add the update action that it's looking for.

    Add the following to PostsController (ABOVE `post_params`).

    ```rb
    def update
    @post = Post.find_by(id: params[:id])
    @post.update_attributes(post_params)

    redirect_to @post
    end
    ```

    This is very similar to create. We grab the Post out of the database (based on the id that comes in). Then we update the attributes of that Post from the form.  `update_attributes` is an ActiveRecord method for updating multiple attributes of an object and then saving them to the database.

    Once again, we need `post_params` because we need to allow those attributes to be saved.

    If you reload the page (and click "Yes" to the warning about submitting the form), you'll see that your changes have been saved.

    Finally, we should add a link from the show post page to go to the edit form.

    Open up `app/views/posts/show.html.erb` and add the following (above the delete link):

    ```erb
    <%= link_to 'edit', edit_post_path(@post) %>
    ```

    That's it!  We have a CRUD app!  We can create, read, update, and delete posts on our blog!

    # Styling

    Let's add some styling to prettify this app.

    We can create a style for our Post routes in `app/assets/stylesheets/posts.css`.
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

    #posts, #post, .post {
      margin-bottom: 1em;
    }

    .post {
      padding-bottom: 1em;
      border-bottom: 1px solid lightGray;
    }
    ```

    This CSS file will automatically be included in all Post related routes.

    To get the full benefits, you'll have to make the following changes:

    In `app/views/posts/index.html.erb`:  
    Wrap the `@posts.each` block in a `<div id = "posts">` and wrap each post in a `<div class = "post">`.

    In `app/views/posts/show.html.erb`:  
    Wrap the post info in a `<div id = "post">`

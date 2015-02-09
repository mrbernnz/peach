# Rails Assets
Where do we put JavaScript and CSS files in a Rails app?

Last week, we told you to put your css in `app/assets/stylesheets` and JS in `app/assets/javascripts`

We use these directories primarily for assets that we create ourselves?

What if we use someone else's assets (like Bootstrap CSS & JavaScript)?

Rails comes with a `vendor/assets/javascripts` and a `vendor/assets/stylesheets` directory for sticking other people's assets.

Technically it won't matter if you put external js and css files in `app/assets`, but it's better practice to use these directories for what they are intended for.


Let's go add Bootstrap to our [newspaper app](https://github.com/ga-students/peach/tree/master/w10/d04/newspaper).

Download Bootstrap files from [here](http://getbootstrap.com/getting-started/#download)

Copy `css/bootstrap.css`, `css/bootstrap.css.map`, `css/bootstrap-theme.css`, and `css/bootstrap-theme.css.map` to `vendor/assets/stylesheets`.
Copy `js/bootstrap.js` to `vendor/assets/javascripts`.

Note: Map files seem to be related to the way bootstrap css files were compiled and are required.

So how do we use this?  Enter the asset pipeline.

# Rails Asset Pipeline

Rails includes something called an "asset pipeline" for serving up JavaScript and CSS.  
The asset pipeline will combine all JS files and CSS files into one file (one CSS and one JS file).  This reduces the number of requests the browser has to make, which speeds things up, particularly on mobile.

It also will "minify" these files, which removes the spaces and newlines from these files.

Finally, we are allowed to code our assets in "higher level languages" like Sass for CSS, CoffeeScript for JavaScript, and optionally using ERB for both.  This goes beyond the scope of this lesson, but is worth noting should you choose to use it later.

How do we use this?

When we ran `rails generate newspaper`, it created an `app/assets/stylesheets/stylesheets/application.css` and `app/assets/javascripts/application.js`.  These files contain "manifests" for our entire project.

Let's open up the stylesheet one.

You'll see something like this:
```rb
*= require_tree .
*= require_self
```

This is where we can add stylesheets from either `app/assets/stylesheets` or `vendor/assets/stylesheets` directories to our application.

Add the following above those 2 lines:
```rb
*= require bootstrap
*= require bootstrap-theme
```

That's all we need to add Bootstrap to our CSS file.

Now let's add it to our JS file.

If you open up `app/assets/javascripts/application.js`, you'll see something like this:

```rb
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
```
Here, we can add javascript files from either `app/assets/javascripts` or `vendor/assets/javascripts`.  

Let's add Bootstrap to that.  
Add the following above `require_tree`:
```rb
//= require bootstrap
```

Now if you reload the newspaper app, you'll see that we now have a bootstrap theme on our site!

# Exercise: Bootstrapped
Add bootstrap to last week's newspaper app found [here](https://github.com/ga-students/peach/tree/master/w10/d04/newspaper).
Do not just link to bootstrap in the head.

Use bootstrap to style the index page. Headlines should be centered and pictures should be circles. On show pages, use Collapse to hide the content of the article until a button is pushed. To do this exercise you will need to figure out how to assign classes to elements in rails. [getbootstrap.com](www.getbootstrap.com) can help you learn about Collapse and turning images into circles.

Solution:

index:
```ruby
<%= @article.headline %>
<br>
<%= @article.author.name %>
<br>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-target
</button>
<div class="collapse" id="collapseExample">
  <div class="well">
    ...

<%= @article.content %>
  </div>
</div>
<br>
<%= image_tag @article.photo_url, height:300 %>
<br>
<%= link_to "Destroy!!!", article_path(@article), method: :delete %>
<br>
<%= link_to "Go home!", articles_path %>
<%= link_to "Edit", edit_article_path(@article)%>
```

show page:
```ruby
<%= @article.headline %>
<br>
<%= @article.author.name %>
<br>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-target
</button>
<div class="collapse" id="collapseExample">
  <div class="well">
    ...

<%= @article.content %>
  </div>
</div>
<br>
<%= image_tag @article.photo_url, height:300 %>
<br>
<%= link_to "Destroy!!!", article_path(@article), method: :delete %>
<br>
<%= link_to "Go home!", articles_path %>
<%= link_to "Edit", edit_article_path(@article)%>
```

# APIs

Rails controllers can return JSON from their routes, instead of (or in addition to) HTML.

Returning JSON can be useful for making an API that your app (or other apps) can hit.  
This can be very useful for SPA apps (and may be very useful when using front-end frameworks like Backbone).

Let's re-write our Pets-SPA app to work with a Rails API.

We can first run `rails new pets`.

Inside of the new app, create a Pet model
`rails generate model Pet name:text pet_type:text`  

We can set up our a seeds file as well:
```rb
Pet.create(name: 'Fluffy', pet_type: 'Hamster')
Pet.create(name: 'Salty', pet_type: 'Cat')
Pet.create(name: 'Pepper', pet_type: 'Cat')
Pet.create(name: 'Big Moe', pet_type: 'Frog')
Pet.create(name: 'Frick', pet_type: 'goldfish')
Pet.create(name: 'Frack', pet_type: 'goldfish')
```

Run `rake db:migrate` and `rake db:seed` to set up our model and database.  Now let's move onto our routes:

```rb
 root "pets#index"
 resources :pets
```

Now that our CRUD routes are set up, let's create a Pets controller (`app/controllers/pets_controller.rb`):

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

Let's add a route for `show`:

```rb
  def show
    @pet = Pet.find_by(id: params[:id])
    if @pet
      render json: @pet
    else
      render status: 400, nothing: true
    end
  end
```

This finds a Pet by the id that's passed in.  If it finds it, it'll render the pet as JSON.
Otherwise it renders a status of "400" and does nothing else.  A status of 200 means that everything was "OK", and is the default status that gets returned.  400 means a "bad request". It's usually good to use HTTP status codes with our APIs so that clients know if the request succeeded.

Let's add the rest of our controller actions (they're mostly the same):

```rb
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
```

We can hit this API using `HTTParty`.  Try doing the following in a separate terminal:

```rb
require 'HTTParty'

HTTParty.get('http://localhost:3000/pets.json')
HTTParty.get('http://localhost:3000/pets/1')

new_pet = {body: {pet: {name: 'smelly cat', pet_type: 'cat'}}}
HTTParty.post('http://localhost:3000/pets', new_pet)

updated_pet = {body: {pet: {name: 'smelly cat', pet_type: 'dog'}}}
HTTParty.put('http://localhost:3000/pets/<id of smelly cat>', updated_pet)

HTTParty.delete('http://localhost:3000/pets/<id of smelly cat>')
```

Now we can bring in our index.js file to our `app/assets/javascripts/pets.js` and our `index.html` file to `app/views/pets/index.html.erb`  

app/views/pets/index.html.erb
```erb
<!DOCTYPE>
<html>
<body>
  <header>
    <h1>Petulance</h1>
  </header>
  <ul id="petsList">
  </ul>

  <h3>Add a pet here:</h3>
  <input type="text" id="newPetName" placeholder="pet name">
  <input type="text" id="newPetType" placeholder="animal type">
  <button id = "addNewPet">ADD IT!</button>
</body>
</html>
```

and our app/assets/javascripts/pets.js (modified slightly for some new routes):

```js
document.addEventListener('DOMContentLoaded', function() {
  var addAllPets = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/pets.json');
    xhr.addEventListener('load', function() {
      var pets = JSON.parse(xhr.responseText);
      pets.forEach(function(pet) {
        addPet(pet); //go to line 30
      })
    });

    xhr.send();
  }

  addAllPets(); //go to line 1

  var deletePet = function() {
    var li = this.parentNode;
    var id = li.id.substring(3);
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://localhost:3000/pets/' + id);
    xhr.addEventListener('load', function() {
      if(JSON.parse(xhr.status === 200)) {
        li.remove();
      }
    });

    xhr.send();
  };

  var addPet = function(pet) {
    var li = document.createElement('li');
    setLiToPet(li, pet); // go to line 37
    var ul = document.getElementById('petsList')
    ul.appendChild(li);
  }

  var setLiToPet = function(li, pet) {
    li.setAttribute('id', 'pet' + pet.id);
    li.innerHTML = "";

    var petText = pet.name + " is a " + pet.pet_type + " ";
    var petTextNode = document.createTextNode(petText);
    li.appendChild(petTextNode);

    var edit = document.createElement('button');
    edit.innerHTML = "Edit";
    edit.addEventListener('click', function() {
      editPet(li, pet.name, pet.pet_type); // go to line 58
    });
    li.appendChild(edit);

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener('click', deletePet); //go to line 16
    li.appendChild(deleteButton);
  }

  var editPet = function(li, name, type) {
    li.innerHTML = '';
    var id = li.id.substring(3);

    //pet name input textbox
    var nameField = document.createElement('input');
    nameField.setAttribute('type', 'text');
    nameField.value = name;
    li.appendChild(nameField);

    //filler text
    var isA = document.createTextNode(' is a ');
    li.appendChild(isA);

    //pet type input textbox
    var typeField = document.createElement('input');
    typeField.setAttribute('type', 'text');
    typeField.value = type;
    li.appendChild(typeField);

    var updateButton = document.createElement('button');
    updateButton.innerHTML = 'Update';
    updateButton.addEventListener('click', function() {
      var newName = nameField.value;
      var newType = typeField.value;
      updatePet(li, newName, newType); //go to line 88
    });
    li.appendChild(updateButton);
  };

  var updatePet = function(li, newName, newType) {
    var id = li.id.substring(3);
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:3000/pets/' + id);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.addEventListener('load', function() {
      var returnedPet = JSON.parse(xhr.responseText);
      setLiToPet(li, returnedPet); //go to line 37
    });

    var updatedPet = {pet: { name: newName, pet_type: newType }};
    xhr.send(JSON.stringify(updatedPet));
  }

  var addNewPetButton = document.getElementById('addNewPet');
  addNewPetButton.addEventListener('click', function() {
    var newName = document.getElementById('newPetName');
    var newType = document.getElementById('newPetType');

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/pets');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.addEventListener('load', function() {
      var returnedPet = JSON.parse(xhr.responseText);
      addPet(returnedPet); //go to line 30
      newName.value = '';
      newType.value = '';
    });

    var newPet = { pet: {name: newName.value, pet_type: newType.value} };
    xhr.send(JSON.stringify(newPet));
  });
});
```

`document.addEventListener('DOMContentLoaded', function() { ` is needed because our JS gets loaded by the asset pipeline before our DOM, so we need to ensure that this script doesn't get run until after everything is loaded since we reference DOM elements in our script.

# Exercise: API'd

Change the newspaper app so when a user goes to ```/articles``` they get a JSON object  of all newspaper articles, including each article's headline, content, and just the author's name.

Hint: use map.

Solution:
```ruby  
def index
  articles = Article.all
  json_obj = articles.map do |article|
    { name: article.headline,
      author: article.author.name,
      content: article.content }
    end
    render json: json_obj
  end
```

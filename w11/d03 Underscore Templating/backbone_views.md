# Underscore Templating

We have gone over server side templating in the form of EJS and ERB.
We can also do client-side templating with JavaScript when we need to render some dynamic content on the front-end.  

Underscore (which is required by Backbone), has a templating library built into it.

Let's look at an example:

```html
<!DOCTYPE>
<html>
  <head>
  <script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
    <script>
        var template = _.template("<h1>Hello, <%= name %></h1>");
        var name_prompt = prompt("What is your name?");
        document.write(template({name: name_prompt }));
    </script>
  </head>
  <body>
  </body>
</html>
```

We can create a template with `_.template("some content")`.  Just like ERB and EJS, we can use `<%= %>` to call variables passed to the ERB.

In this example, we set up a template that takes a name variable and prints it out.
We ask the user for his or her name and then pass it to the template.  This needs to be passed as an object, which will then be passed to the template to generate a string of HTML.  We then write this to the screen with `document.write`.

For things that are longer than this, we can actually do this in HTML with

```html
<script type = "text/template"></script>
```

Let's take a look at an example: 

```html
<!DOCTYPE>
<html>
  <head>
  <script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
    <script type = "text/template" id = "personTemplate">
      <h1>Hello, my name is <%= person.name %></h1>
      I like doing the following things:
      <ul>
        <% person.hobbies.forEach(function(hobby) { %>
          <li><%= hobby %></li>
        <% }); %>
      </ul>
    </script>
    <script>
        var template = _.template(document.getElementById("personTemplate").innerHTML);
        document.write(template({person: {name: 'Ron Burgendy', hobbies: ['Reporting the news', 'Playing the jazz flute', 'Jogging']}}));
    </script>
  </head>
  <body>
  </body>
</html>
```

Here we set up a template with `<script type = "text/template">`.  The browser knows what this means and will hide it from view.  When we use `document.getElementById('personTemplate').innerHTML`, we get the HTML from that element and it is returned as a string.  We can now use this with our template and pass it a person and some hobbies.

# Exercise: Make a Pizza

Use underscore templating to show the recipe for a Pizza.
At a minimum, you need to pass an object to the template that has a key called "ingredients" and contains an array of `["cheese", "sauce", "pepperoni"]`

# Backbone Views

Now that we understand templates a little better, we can start talking about views.
Like Rails and many other MVC frameworks, Backbone provides a "View".

Unlike with Rails, views in Backbone do not include HTML.  Instead they behave more like "presenters", which is to say that they bind logic to view elements.

Here's an example:

```html
<!DOCTYPE>
<html>
  <head>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
    <script src="http://documentcloud.github.com/backbone/backbone-min.js"></script>
    <script type = "text/template" id = "personTemplate">
      <h1>Hello, my name is <%= person.name %></h1>
      I like doing the following things:
      <ul>
        <% person.hobbies.forEach(function(hobby) { %>
          <li><%= hobby %></li>
        <% }); %>
      </ul>
    </script>
  </head>
  <body>
    <div id = "person"></div>
    <script>
        var PersonView = Backbone.View.extend({
          el: '#person',
          template: _.template($('#personTemplate').html()),
          initialize: function() {
            this.render();
        },

        render: function() {
          this.$el.html(this.template({person: {name: 'Ron Burgendy', hobbies: ['Reporting the news', 'Playing the jazz flute', 'Jogging']}}));
          return this;
          }
        });

        new PersonView();
    </script>
  </body>
</html>
```

Here we create a `PersonView` by extending `Backbone.View`.  `el` is the DOM element we are tying our BackboneView to.  We use a CSS selector to indicate that it is the element with an id of "person" (our div further up in the document).  If you don't specify an element, Backbone will create one for you (a `div` by default).

Then we set a template on the `PersonView` to be the html inside the element with an id of "personTemplate" (the template we created earlier).  Here we are using jQuery to grab the html from that element.

Backbone views have an initialize function that gets called every time we create a new View.  In this case, we simply want to render the view.

The render function is where we actually render the view.  `this.$el` gives us access to the `el` element we set earlier.  We use jQuery to set the html to the template and pass in some data.

Finally, we create a `PersonView` which triggers `initialize` which triggers the `render`.

We can also bind events to this `PersonView` by supplying an "events" Hash:

```js
 var PersonView = Backbone.View.extend({
          el: '#person',
          template: _.template($('#personTemplate').html()),
          initialize: function() {
            this.render();
        },
          events: {"click h1": "changePerson"},
          changePerson: function() {
                  this.$el.html(this.template({person: {name: 'Brick Tamlan', hobbies: ['Reporting the weather', 'Lamp']}}));
          },


        render: function() {
          this.$el.html(this.template({person: {name: 'Ron Burgendy', hobbies: ['Reporting the news', 'Playing the jazz flute', 'Jogging']}}));
          return this;
          }
        });

        new PersonView();

```

Here we add a "click" event listener to the "h1" element (within this view).
When the h1 is clicked, it will trigger the "changePerson" function.  That function will change the html in this element with the template, this time passing in a new person.

Load it up in the browser and try it!

# Exercise: Pizza II

Take the last exercise and make it use a Backbone View.  

**Bonus:** Add an event that listens for a click event somewhere in the view.  
This will trigger a new Pizza template to be rendered, this time with the ingredients `['spinach', 'mushrooms', 'cheese']`.

# Pets III: Backbone

So now that we've seen what we can do with Backbone Views, let's apply this to our Pets app.

The first thing we need to do is set up our `index.html` page.  This is going to be largely the same as what we have seen, but there will be a template that we will use for populating our view with Pet models.

index.html
```html
<!DOCTYPE>
<html>
  <body>
    <header>
      <h1>Petulance</h1>
    </header>
    <ul id="petsList">
    </ul>

    <h3>Add a pet here:</h3>
    <div id = "addPetForm">
      <input type="text" id="newPetName" placeholder="pet name">
      <input type="text" id="newPetType" placeholder="animal type">
      <button id = "addNewPet">ADD IT!</button>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
    <script src="http://documentcloud.github.com/backbone/backbone-min.js"></script>

    <script src = "js/models/pet.js"></script>
    <script src = "js/collections/pet_collection.js"></script>

    <script type = "text/template" id = "petTemplate">
        <%= pet.name %> is a <%= pet.type %> 
        <button>Edit</button>
        <button>Delete</button>
    </script>
  </body>
</html>
```

Everything down to the `addPetForm` we have seen before. Then we require jQuery, Underscore, and Backbone from their CDN's.  Then we require our model and collection from yesterday.  Finally, we have a JS template.  

Now let's move onto our views.  Add `<script src = "js/views/pet_views.js"></script>` to your `index.html`. Create a directory called `js/views` and create a file inside of that called `pet_views.js`.

This file will hold our views.

Inside of here, add the following:
```js
$(document).ready(function() {
  var PetsView = Backbone.View.extend({
    el: '#petsList',
      initialize: function() {
        this.listenTo(this.collection, 'sync', this.render);
      },

      render: function() {
        var el = this.$el;
        el.html('');
        this.collection.each(function(pet) {
          el.append(new PetView({model: pet}).render().el);
        });

        return this;
      }
  });

  var PetView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#petTemplate').html()),

    render: function() {
        this.$el.html(this.template({pet: this.model.toJSON()}));
        return this;
      }
  });

  var petsView = new PetsView({collection: pets});
});
```

The first bit is `$(document).ready(function() {`.  If you have used JQuery, this will look familiar.  Backbone JS requires JQuery and tends to work best when you use it.

In this case, we need to wrap everything we are doing in `$(document.ready()` because our code depends on elements of the DOM existing.  So we wait until the DOM is loaded so we can use it.

Next we create a new View with `BackboneView.extend()`.    
In our initializer, we set up a "listener" to listen to certain events from our collection (which will be a `PetsCollection`).  In this case, we are listening for the `sync` event, which is triggered when our model `syncs` to the database.  This happens every time we run a `fetch` on the collection to retrieve from the database.  In our example, we will re-render the view every time that happens.

In our render method, we first grab our element with `this.$el`.  We set the html in that element to an empty string to clear what is there (`el.html('')` is a jQuery equivalent to `document.getElementById('#petsList').innerHTML = ''`).

Then we iterate over each `Pet` in our collection and render a view for each pet.  We render each of those views and append them to the `PetsView`.  

By convention, we return `this` from the render method.

`PetView` is similar to this.  We set a `tagName` of `li`.  We can't bind to an existing element because we need to create an HTML element for each `Pet` that we are adding.  

In the render function on `PetView`, We use jQuery to get our `petTemplate` that we defined in our HTML and then use the `.html()` method to get the html for that element.

The `render` method for `PetView` will set the HTML for the `$el` (the new `li`) to the template.  We pass the `pet` to the template and underscore will replace the name and type of the pet with the values on the model.

Finally we create a `PetsView` and give it a collection of `pets`.  So `PetsView` gets a collection and `PetView` has an individual model.

If we load up our server and open `index.html`, we will see all of our models on the page.

Note: We added "Edit" and "Delete" buttons, but these do not work yet.  Our "ADD IT!" button also does not work yet.

# Creating a new Pet

So let's wire up our "Create Pet" form.  This will require a new view called `CreatePetView`.  Add the following to our `js/views/pet_views.js`

```js
 var CreatePetView = Backbone.View.extend({
    el: '#addPetForm',
    events: {'click #addNewPet': 'createPet'},
    createPet: function() {
      var nameField = this.$('#newPetName');
      var typeField = this.$('#newPetType');
      var name = nameField.val();
      var type = typeField.val();

      this.collection.create({name: name, type: type});

      nameField.val('');
      typeField.val('');
    }
   });
```

`CreatePetView` will bind to our `addPetForm` div in our HTML file.
In our `events` hash, we say "When someone clicks on the element with an `addNewPet` id, call the `createPet` function.

That id that is specified is relative to the `#addPetForm` element.

Inside createPet, we first grab the name field and type field using jQuery selectors.  When we call `this.$('#newPetName')`, we are looking for an element with the id of `newPetName` within `#addPetForm`.  
Then we use `.val()` to grab the values in that field.

Then we call `create` on the collection that is bound to this view and pass in the new `name` and `type`.

Finally, we reset the values of those fields to an empty string.

If we load up our server, our add pet form should work.

Notice that our `PetsView` automatically reloads.  This is because we bound it to the `sync` event that happens every time our `PetCollection` syncs with the database.  This happens when we create a Pet.

# Deleting a Pet

Now let's work on deleting a pet.  This will be related to the "Delete" button in the `PetView`.  

First we need to add a class to our delete button in our template (in `index.html`):
```html
  <button class = "deleteButton">Delete</button>
```

Now we need to add an event to our events hash within the `PetView`.  Make it look like this:

```js
events: { 'click .deleteButton': 'deletePet' },
```
When we click on the button with a class of "deleteButton" (within the `PetView`), the `deletePet` function will be called.

Now we can add the following `deletePet` function to our `PetView`:  
```js
  deletePet: function() {
    this.model.destroy();
  }
```

Finally, we have to add a "remove" event to our listener on our `PetsView` to actually listen for this action.

Find the line that says:
```js
  this.listenTo(this.collection, 'sync', this.render);
```
and change it to:

```js
  this.listenTo(this.collection, 'sync remove', this.render);
```

This tells our `PetsView` to listen to the `remove` event, which is triggered when a model in the collection is destroyed, and to re-render the view when this happens.

Try it out!

# Edit/Update

And now we just need to be able to update our Pets.

In our `index.html`, change our `petTemplate` to look like this:

```html
    <script type = "text/template" id = "petTemplate">
    <span class = "pet">
        <%= pet.name %> is a <%= pet.type %> 
        <button class = "editButton">Edit</button>
        <button class = "deleteButton">Delete</button>
      </span>
      <span class = "editForm" style = "display: none">
        <input type = "text" id = "newName<%= pet.id %>" value = "<%= pet.name %>"> 
        is a <input type = "text" id = "newType<%= pet.id %>" value = "<%= pet.type %>"> 
        <button class = "updateButton">Update</button>
      </span>
    </script>
```

Basically, we have 2 `spans`.  One of them contains our "pet" li's that we had before.  The second one is hidden by default, and contains a form to edit our pet.

We will write code that will toggle these 2 (hide the pet and show the edit) when the edit button is clicked.  Clicking the "update" button will then persist changes to the model.

Back in our `pets_views.js`, we need to bind an event to our Edit buttons (within our `PetView`).

Change:
```js 
  events: { 'click .deleteButton': 'deletePet' },
```

to 

```js
  events: { 
            'click .deleteButton': 'deletePet',
            'click .editButton': 'editPet'
          },
```

Now we need to toggle the edit form.  Add the `editPet` function to the `PetView`.

```js
editPet: function() {
     this.$('.pet').hide();
     this.$('.editForm').show();
    }
```
This will hide the span with a class of "pet" and show the span with a class of "editForm" (within our `PetView`).

Go ahead and reload the page.  Now when you click on the `edit` button, it will toggle the edit fields for a particular pet.

How do we go about editing this?

First we have to add an event to the update button inside our `PetView`.

```js
events: { 
  'click .deleteButton': 'deletePet',
  'click .editButton': 'editPet',
  'click .updateButton': 'updatePet'
},
```

Now we have to add our `updatePet` function to `PetView':

```js
updatePet: function() {
      var newName = this.$('#newName' + this.model.id).val();
      var newType = this.$('#newType' + this.model.id).val();
      this.model.set({name: newName, type: newType});
      this.model.save();
    },
```

Here we grab the value of the new name and the new type from their input fields and we set those new values on the `Pet` model.

Then we save the pet model.  This triggers a `sync` event and that will re-render the `PetsView`, so we don't have to handle that ourselves.

Now reload the page and you'll see that we have a working CRUD app in Backbone!


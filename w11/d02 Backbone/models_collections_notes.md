# BACKBONE TIME

Backbone is a MV*. We call it that because there's not a controller in the traditional sense. From Addy Osmani:

So does Backbone.js have Controllers? Not really. Backbone's Views typically contain "Controller" logic, and Routers are used to help manage application state, but neither are true Controllers according to classical MVC.

Let's start by creating models and collections.

First, let's make a basic environment:

```
bbone
  |
  |-collections
  |      |-collections.js
  |      |-collections2.js
  |
  |-models
  |   |-models.js
  |   |-models2.js
  |
  |-index.html
```

In Index.html:
```html
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>Title</title>
</head>
<body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
<script src="http://documentcloud.github.com/backbone/backbone-min.js"></script>
<script src="./models/models.js"></script>
<script src="./collections/collections.js"></script>
</body>
</html>
```

The scripts link to jquery and underscore (two libraries backbone is dependant on) and backbone itself, as well as the scripts we will write today.

First, let's create our models script. Here we will create objects and add attributes and some functionality to them.

## The basics of creating and updating, and intializing
The first thing we must do is 'extend' Backbone.Model.  This is similar to inheritance - once we extend model onto pets we can extend pets on to something else which will have all the properties of pets.

```js
var Pet = Backbone.Model.extend();
```

Next, let's make an instance of our first pet (which has all the methods associated with Backbone.Model).

```js
var pet1 = new Pet()
```

pretty boring, let's add some information with ```.set()```:

```js
pet1.set("name", "fluffy")
pet1.set("type", "hamster")
```

Open your console and type in ```pet1``` and hit enter. Lot's of info should come up, but we're only interested in the attributes. Now try ```pet1.attributes```.

Let's add a ```console.log``` to our code so we don't have to do this over and over.

After setting pet1's attributes, enter
```js
console.log(pet1);
console.log(JSON.stringify(pet1));
console.log(pet1.toJSON());
```
Refresh the page. Note how first you get the pet1 object, then you a JSON string of pet1's attribute, and finally you get an object with only the attributes of pet1.

Next, let's use ```.get()``` to get a single attribute of our pet.

```js
console.log(pet1.get("name"));
```

We'll be using .get() later to display information on the screen.

Each instance of your model has an ```.attributes``` attribute. Add the following code to see how to interact with it:

```js
console.log(pet1.attributes);
console.log(pet1.attributes.name);
```

```.attributes``` returns an object of just the attributes while ```.attributes.name``` returns pet1's value of ```name```

Let's add some functionality to our instances with initialization. Make the following change to

```js
var Pet = Backbone.Model.extend();
```

```js
var Pet = Backbone.Model.extend({
  initialize: function(){
    console.log("Your pet has been created");
    // a heads up on any change of state
    this.on('change', function(){
      console.log('SOMETHING IS AFOOT');
    });
  }
});
```

Refresh your page. You can see each time a new instance of the pet object is created we get a message telling us so.

Note how many times 'SOMETHING IS AFOOT' logged in the console. What this code means is anytime there's a ```change``` on an instance of  ```this``` model, ```SOMETHING IS AFOOT``` is logged. Since we made two changes to pet1 using ```.set()```, we got our message logged twice. If we change multiple attributes at the same time how many times will our message log?

Let's change
```js
pet1.set("name", "fluffy")
pet1.set("type", "hamster")
```

to
```js
pet1.set({name: "fluffy", type: "hamster", id: 1})
```

We're now passing a hash of info to set, and since this is only one change our ```change``` event only fires once.

There's also now an id key, which would normally be assigned by a database, but we'll be assigning them manually in the meantime.

It's also possible to listen for changes on individual attributes with
```js
this.on('change:name', function(){
  console.log("That's better than Ochocinco.");
});
```
Let's add a new pet and see if our ```change``` event fires when we reload the page.
```js
var pet2 = new Pet({
  name: "Salty",
  type: "Cat"
})
```

It doesn't, as we didn't make any changes to this pet. Let's make a change with ```.set()``` and see the message again. Add this to your page:
```js
pet2.set({name: "Pepper"})
console.log(pet2.attributes);
```

As you can see, we only changed pet2's name, and we got our ```change``` message.

# Exercise 1
Using ```.get()```, have the following appear in your console:
```
"Fluffy is a hamster."
```
Using ```.attributes```, have the following appear in your console:
```
"Pepper is a cat."
```

solution:
```js
console.log(pet1.get('name') + " is a " + pet1.get('type') + ".");
console.log(pet2.attributes.name + " is a " + pet2.attributes.type + ".");
```

## Validation
Let's add some validation to our original ```var Pet = Backbone.Model.Extend({``` line:
```js
var Pet = Backbone.Model.extend({
  initialize: function(){
    console.log("Your pet has been created");
    // a heads up on any change of state
    this.on('change:name', function(){
      console.log("That's better than Ochocinco.");
    });
    this.on('change', function(){
      console.log('SOMETHING IS AFOOT');
    });
    this.on("invalid", function(model, error){
      console.log(error);
    });
  },
  validate: function(attributes){
    if(attributes.name === undefined){
      return "If I am nameless can I truly exist?";
    } if(attributes.type === undefined){
      return "What is the nature of being if one does not have a type?";
    }
  },
});
```

First, note the change in the initialize block; now if a model is deemed invalid we should see an error message. Now look at the validate block; it's just making sure that when a new pet instance is create it has both a name and a type, and if it does not it returns an error, which our intialize block will log. Let's add an incomplete pet and see what happens when we refresh:
```js
var pet3 = new Pet()
```

pet3 was created, but it did not fail validation, despite missing both a name and type. This is because validation only happens when it is persisted with ```.save()``` (which we'll get to another day) or when we set an attribute and add the following code:
```js
pet3.set({name: "Big Moe", id: 3}, {validate: true})
```
This should log your error designated for a missing type. Was pet3's name changed, though? Let's log it and see:
```js
console.log(pet3.attributes);
```

So when validation fails, no changes are made at all.

To avoid the pitfalls of missing attributes, we can add default values to our pet constructor, like so:
```js
var Pet = Backbone.Model.extend({
  defaults: {
    name: 'T-1000',
    type: 'TERMINATOR'
  },
  initialize: function(){
    console.log("Your pet has been created");
    // a heads up on any change of state
    this.on('change:name', function(){
      console.log("That's better than Ochocinco.");
    });
    this.on('change', function(){
      console.log('SOMETHING IS AFOOT');
    });
    this.on("invalid", function(model, error){
      console.log(error);
    });
  },
  validate: function(attributes){
    if(attributes.name === undefined){
      return "If I am nameless can I truly exist?";
    } if(attributes.type === undefined){
      return "What is the nature of being if one does not have a type?";
    }
  },
});
```
Now refresh your page, and see what happens to pet3's validation experience.

# COLLECTIONS
Collections are groups of multiple instances of a model.

Go into collections.js and add the following extension of Backbone.Collection:
```js
var Pets = Backbone.Collection.extend({
  model: Pet
  })
```
Let's create a new collection called pets and pass it pet1, then use ```.add()``` to add pet2, and then log the collection on the console:
```js
var pets = new PetsCollection(pet1);
pets.add(pet2);
console.log(pets)
```

It's also possible to use ```.set()``` on collections, however this removes any instances of the model not passed to set.

We can remove an instance of our Pet model easily with ```.remove()``` like so:
```js
pets.remove(pet2);
console.log(pets);
```

It is also possible to remove all models from a collection with ```.reset()```

Now when we refresh we see that our pets collection only holds one object. Let's add two pets at once with an array:
```js
pets.add([pet2, pet3]);
console.log(pets);
```

We can add a new pet manually to our collection like so:
```js
pets.add({name: "Little Moe", type: "Frog", id: 4})
console.log(pets)
```

Let's access instances of pets in our collection using ```.get()```.
```js
console.log(pets.get(4))
```

In this case, ```.get()``` takes an id number and returns the instance in the collection with that id.

If we want a specific value from an instance in the collection, it takes a little more digging:
```js
console.log(pets.get(2)['attributes'].name)
```

The id assigned by the database isn't the only unique id that an instance has; backbone also adds a 'client id', referred to as 'cid'. This is useful if you haven't yet saved a new instance of a model. You can use it thusly:
```js
console.log(pets.get(2)['cid'])
```
There's also an idAttribute that you can use to identify which field is the id set by the database; however this defaults to the id field.

It's possible to add event listeners to collections, much like model initialization.
```js
pets.on("add", function(pet) {
  console.log("There's a new " + pet.get('type') + " in town named " + pet.get('name') + ".")
});
pets.add({name: "Frick", type: "Goldfish", id: 5})
```
Two other common events are remove and change; change can, like when intializing our model earlier, be tied to a certain attribute.

# Exercise
Add an event listener to our pets that logs "Name changed!" whenever a name is changed in the pets collection. Because our models.js is loaded before collections.js we have access to all the variables set there...

solution:
```js
pets.on("change:name", function() {
  console.log("Name changed!")
})
pet1.set({name: "Ralph"})
```
# Underscore
Backbone is dependent on underscore, so we have access to underscore's methods for both collections and models.
# Exercise:
Using backbone's documentation, read about and use the following methods with your pets collection:
- forEach()
- map()
- pluck()
- indexOf()
- any()
Do the same for the following methods with instances of the Pet model:
- keys()
- values()
- pairs()
- pick()

# Persistance is key
First, go to /pets-spa-sql in peach's w09/d04. Run the server by following the steps in the readme.
Next, comment out the script tags for models.js and collections.js. Add the following to models2.js:
```js
var Pet = Backbone.Model.extend({
  defaults: {
    name: 'T-1000',
    type: 'TERMINATOR'
  },
  initialize: function(){
    console.log("Your pet has been created");
    // a heads up on any change of state
    this.on('change:name', function(){
      console.log("That's better than Ochocinco.");
    });
    this.on('change', function(){
      console.log('SOMETHING IS AFOOT');
    });
    this.on("invalid", function(model, error){
      console.log(error);
    });
  },
  validate: function(attributes){
    if(attributes.name === undefined){
      return "If I am nameless can I truly exist?";
    } if(attributes.type === undefined){
      return "What is the nature of being if one does not have a type?";
    }
  },

});
```
There are a few syntax changes in there to match the current db for this lesson.


Now in collections2.js add the following code:
```js
var PetsCollection = Backbone.Collection.extend({
  model: Pet,
  url: 'http://localhost:3000/pets'
})

var pets = new PetsCollection();
pets.fetch();
console.log(pets)
```

Note the new pluralized url in the Collection extension, as well as the ```.fetch()``` method. ```.fetch()``` will take the url provided and create a GET request; it then creates a new collection based on the JSON it receives back from the API.
It acts like ```.set()```, so it will replace any models in the collection with what it receives.

Now let's create and update. ```.create()``` has a great write up [here](http://backbonejs.org/#Collection-create). ```.save()``` has a great write up [here](http://backbonejs.org/#Model-save). Let's walk through the following code:

```js
var PetsCollection = Backbone.Collection.extend({
  model: Pet,
  url: 'http://localhost:3000/pets/'
});

var pets = new PetsCollection();
var j5 = new Pet({name: 'number 5', type: 'robot'});
console.log(j5.attributes.name)
pets.create(j5, {
  success: function(response) {
    j5.set('id', response.toJSON().id);
    j5.set({name: 'Johnny 5'});
    j5.save();
  }
});
```

After declaring PetsCollection and which url it should use, we first create a new collection called pets. We then create a new instance of a Pet called j5 and declare it's attributes. We then use ```.create()``` to pass j5 to the server, which persists it and returns JSON. Because there is not yet an id in j5's attributes hash, Backbone knows to send a Post request to the declared URL.  Assuming the API is written well, we can then take the id from the response (this is the id assigned to j5 in the database as a primary key) and assign it to j5's attribute hash as an id. In this particular instance, after we do so we change j5's name attribue to 'Johnny 5' and then use ```.save()```. Because there is now an ID in j5's attribute hash, when we call ```.save()``` it sends a PUT request to the server and updates the database accordingly.

All that's left to do at this point is to destroy little_moe thusly:
```js
var little_moe = new Pet({name: 'Little Moe', type: 'frog'});
pets.create(little_moe, {
  success: function(response) {
    little_moe.set('id', response.toJSON().id);
    console.log(little_moe.toJSON())
    little_moe.destroy();
  }
});
```

Because little_moe is not yet in our db he is added with ```.create()```. Once he is added, it's as simple as ```little_moe.destroy();``` to have our server recieve a DELETE request and then delete little_moe from our database.

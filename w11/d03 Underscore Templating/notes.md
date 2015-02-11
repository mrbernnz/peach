```html
<html>
  <head>
    <title></title>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
      <script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
      <script src="http://documentcloud.github.com/backbone/backbone-min.js"></script>
    </script>
  </head>
  <body>
    <script type = "text/template" id = "foodTemplate">
      <h1>Hello, I love <%= foodX.name %></h1>
      These are the following ingredients:
      <ul>
        <% foodX.ingredients.forEach(function(food) { %>
          <li><%= food %></li>
          <% }); %>
      </ul>
    </script>
    <div id='food'></div>
    <script>
    var FoodView = Backbone.View.extend({
        el: '#food', /*grabs the id of that tag and renders a view inside that tag*/
        template: _.template($('#foodTemplate').html()),
        initialize: function () {
            this.render();
        },
        events: {'click h1': 'changeFood'}, /*you can use classes or ids in place of h1 tag*/

        changeFood: function () {
            this.$el.html(this.template({foodX: {name: 'Veggie Pizza', ingredients: ['spinach', 'mushrooms', 'cheese']}}));
        },

        render: function () {
            this.$el.html(this.template({foodX: {name: 'Pepperoni Pizza', ingredients: ["cheese", "sauce", "pepperoni"]}}));
            return this
        }
    });
    new FoodView();
    </script>
  </body>
</html>
```
####Doing AJAX SPA calls with Backbone
```js
// pet_views.js
$(document).ready(function(){
    var PetsView = Backbone.View.extend({
        el: '#petslists',
        initialize: function(){
            this.listenTo(this.collection, 'sync remove', this.render); //an event listener that gets triggered by backbone collection for anything that has been fetched or saved to the API. It rerenders itself
        },
        render: function() {
            var **el** = this.$el;
            **el**.html('');
            this.collection.each(function(pet) {
                **el**.append(new PetView({model: pet}).render().el); //render for each model that will append to the collection view
                });
                return this;
        }
        });
        var PetView = Backbone.View.extend({
            tagName: 'li'
            template: _.template($('#petTemplate').html()),
            events: {'click .deletButton': 'deletePet'},
            deletePet: function() {
                this.model.destroy();
            },
            render: function(){
                this.$el.html(this.template({pet: this.model.toJSON()}));
                return this;
            }
            });

            var CreatePetView = Backbone.View.extend({
                el: '#addPetForm',
                events: {'click #addNewPet': 'createPet'},
                createPet:; function() { //called when click on the button in the index.html
                    var nameField = this.$('#newPetName'); //looks for that id in the index.html
                    var typeField = this.$('#newPetType');
                    var newPetName = nameField.val();
                    var newPetType = typeField.val();

                    this.collection.create({name: newPetName, type; newPetType});
                    nameField.val(''); // clears whatever was inputted inside the textboxes in the index.html
                    typeField.val('');
                }
                });
  var createPetView = new CreatePetView({collection: pets});
  var petsView = new PetsView({collection: pets});
});


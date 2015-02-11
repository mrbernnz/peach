Exercise: Make a Pizza

Use underscore templating to show the recipe for a Pizza. At a minimum, you need to pass an object to the template that has a key called "ingredients" and contains an array of ["cheese", "sauce", "pepperoni"]
####Solution
```html
<html>
  <head>
    <title></title>
    <script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
  </head>
  <body>
    <script type = "text/template" id = "recipeTemplate">
      <h1>Hello, my recipe for <%= recipe.name %></h1>
      You will need following things:
      <ul>
        <% recipe.ingredients.forEach(function(hobby) { %>
          <li><%= Ingredients %></li>
          <% }); %>
      </ul>
    </script>
    <script>
      var template = _.template(document.getElementById("recipeTemplate").innerHTML);
      document.write(template({recipe: {name: "Pizza", ingredients: ["Cheese", "Sauce", "Pepperoni"]}}));
      </script>
  </body>
</html>
```

Exercise:

Take the last exercise and make it use a Backbone View.

Bonus: Add an event that listens for a click event somewhere in the view.
This will trigger a new Pizza template to be rendered, this time with the ingredients ['spinach', 'mushrooms', 'cheese'].
####Solution
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

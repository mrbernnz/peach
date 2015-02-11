var Pets = Backbone.Collection.extend({
  model: Pet,
  url: 'http://localhost:3000/pets'
});

var pets = new Pets();
pets.fetch();

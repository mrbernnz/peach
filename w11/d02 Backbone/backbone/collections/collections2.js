var PetsCollection = Backbone.Collection.extend({
  model: Pet,
  url: 'http://localhost:3000/pets/'
});

var pets = new PetsCollection();
// var j5 = new Pet({name: 'number 5', type: 'robot'});
// console.log(j5.attributes.name)
// pets.create(j5, {
//   success: function(response) {
//     j5.set('id', response.toJSON().id);
//     j5.set({name: 'Johnny 5'});
//     j5.save();
//   }
// });

// pets.add({name: 'Little Moe', type: 'Frog', id: 4});
// pets.create(pets, {
//   success: function(response) {
//     pets.set('id', response.toJSON().id);
//     pets.set({name: 'Little Moe'});
//     pets.destroy();
//   }
// });

pets.fetch();
console.log(pets);

console.log(pets);


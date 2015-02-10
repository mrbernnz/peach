var PetsCollection = Backbone.Collection.extend({
  model: Pet
});
var pets = new PetsCollection(petone);
pets.add(pettwo);
console.log(pets);
pets.remove(pettwo);
console.log(pets);
pets.reset();
pets.add({name: 'Little Moe', type: 'Frog', id: 4});
console.log(pets.get(4));
console.log(pets.get(2).attributes.name);
console.log(pets.get(2)[cid]); /*assigned to the client as unique id*/

pets.on('add', function (pet) {
  console.log("there's a new " + pet.get('type') + "in town named " + pet.get('name'));
});
pets.add({name: 'Frick', type: 'Fish', id: 5});

pets.on('change:name',function () {
  console.log('name changed');
});

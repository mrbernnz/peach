// var C = function(){
//   this.l = function(string){
//     console.log(string);
//   };
// };
// var c = new C();

// c.l('stuff');

// var Pet = Backbone.Model.extend({
//   defaults: {
//     name: 'Not Specified',
//     type: 'Not Specified'
//   },

//   initialize: function () {
//     console.log("Your pet has been created");
//     this.on('change', function () {
//       console.log('something is afoot');
//     });
//     this.on('change:name', function () {
//       console.log("that's better than Ohcocinco");
//     });
//     this.on('invalid', function (model,error) {
//       console.log(error);
//     });
//   },

//   validate: function (attr) {
//     if (attr.name === undefined)
//       {return 'no name!';}
//     if (attr.type === undefined)
//       {return 'no type';}
//   }
// });
// var petone = new Pet({name: 'Salty', type: 'Cat', id: 2});
// var pettwo = new Pet();
// pettwo.set({name: 'Big Mac', id: 3}, {validate: true});
// console.log(petone);
// console.log(JSON.stringify(petone));
// console.log(petone.toJSON());
// console.log(petone.get('name'));
// console.log(petone.attributes);
// console.log(petone.attributes.name);
// console.log(petone.get('name'));
// console.log(pettwo.attributes);

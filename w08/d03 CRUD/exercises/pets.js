// var fs = require('fs');
var request = require('request');
var express = require('express');
var app = express();
var pet = [];
var pets = [{results: pet}];
var status = {status: 'Success'};
// adds a new pet with the specific name and type
// returns in JSON the object {"status": "Success!"}
app.get('/create/:pet_name/:pet_type',function(req,res){
var pet_name = req.params.pet_name;
var pet_type = req.params.pet_type;
  pet.push({pet_name: pet_name,pet_type: pet_type});
  console.log(pet);
  res.json(status)
});

// // returns an object with one key of a pet's name. If no pet exists with this name then return an empty object.
// app.get('/read/:pet_name',function(req,res){
// });
// app.get('/update/:pet_name/:new_pet_name',function(req,res){
//   // changes the name of a pet
// });
// app.get('/destroy/:pet_name',function(req,res){
//   // removes a pet by the name pet_name
//   // returns in JSON the object {"status": "Success!"}
//   // if the pet existed
//   // returns {"status": "A pet by that name does not exist."}
//   // if no pet by that name was found
// });
// app.get('/all_pets',function(req,res){
//   // returns an array of all the pet objects in JSON
// });
var server = app.listen(3000, function() {
  console.log('listening on port 3000')
});

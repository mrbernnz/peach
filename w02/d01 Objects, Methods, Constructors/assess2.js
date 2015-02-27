// var bncr = process.argv[2];
//
// var id = function(){
//   if
//
//   name = "Sean";
//   age = 87;
//   console.log(name+ " is " +age+ " years old.");
// }

var id = function(name, age, bncr){
  console.log(name+ ' is ' +age+ ' years old.');
  bncr(age);
}


// var bncr = function(age){
//   if (age >= 21) {
//     console.log("Come on in.");
//   }
//   else {
//     console.log("Nice try buddy.");
//   }
// }

//id(bncr);

//solution

var bncr = function(age){
  if (age >= 21) {
    console.log('Come on in.');
  }
  else {
    console.log("Nice try buddy.");
  }
}

id("Sean", 87, bncr);

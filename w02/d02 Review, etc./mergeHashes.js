var blue = {
  "Heisenberg": "Hello, anyone home?",
  "Cap'n Cook": "Science, friend!",
  "James McGill": "Ring, ring!"
}
var ciudad = {
  "Vuente": "Salud!",
  "Gus": "One taste and you'll know.",
  "Tio": "Family is all."
}
var k1 = Object.keys(blue);
var k2 = Object.keys(ciudad);

var mrghsh = function(){
  for (var i = 0; i < k1.length; i++) {
  var key1 = k1[i];
  var value1 = blue[key1];
  console.log("hello");
}
    for (var j = 0; j < k2.length; j++) {
      var key2 = k2[j];
      var value2 = ciudad[key2];
      console.log("hello");
    }

return ((key1 + ": " + value1) + "; " + (key2 + ": " + value2));
}

console.log(mrghsh());
// for (var i = 0; i < keys2.length; i++) {
//   var key = keys2[i];
//   var value = ciudad[key];
//   console.log(key + ": " + value);
// }
// console.log(key);
//
// for (var i = 0; i < fun.length; i++) {
//   trailMix.push(fun[i], work[i]);
// }

// for (var j = 0; j < ciudad.length; j++) {
//   var key = happyFamily[j];
//   var value = ciudad[key];
// }

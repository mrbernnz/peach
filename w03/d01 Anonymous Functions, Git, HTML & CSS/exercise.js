// var SayHello = function() {
//   console.log("hello");
// }
//
// setInterval(SayHello(),2000);

//anonymous functions
//say hello every 2 seconds, for just 5 times using a anonymous function.

// var i = 0;
// var id = setInterval(function(){
//   if (i < 5) {
//     console.log("hello");
//     i++;
//   }
//   else {
//     clearInterval(id);
//   }
// }, 2000);

var i = 0;
var id = setInterval(function(){
  console.log("hello");
  i++;
  if (i === 5) {
    clearInterval(id);
  }
},2000);

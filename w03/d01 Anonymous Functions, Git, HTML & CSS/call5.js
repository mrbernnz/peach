// var callInFive = function(name){
//   var name = function(){
//     console.log("Joe's Crab Shack");
//     setTimeout(name,5000);
//   }
// }


// var callInFive = function(name){
//   this.name = function(){
//     console.log("hello");
//   }
// }

var callInFive = function(funParam){
  setTimeout(funParam,5000);
}

var sayHello = function(){ console.log("hello");}
var sayGoodbye = 
callInFive(sayHello);

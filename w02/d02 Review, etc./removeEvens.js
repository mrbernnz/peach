//takes an array of numbers
var numb = [3,4,5,6,20,11];
var odd = [];
//returns a new array of numbers that has the even numbers removed
var removeEvens = function(){
for (var i = 0; i < numb.length; i++) {
  if (numb[i] % 2 != 0) {
    odd.push(numb[i]);
  }
}
return odd;
}

console.log(removeEvens());

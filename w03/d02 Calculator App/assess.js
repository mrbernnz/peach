//write a function called addNumbers that takes 2 intergers as parameters and returns their sum.

var addNumbers = function(num1, num2){
  sum = num1 + num2;
  return sum;
}

console.log(addNumbers(2,4));

//more succinct
var addNumbers =  function(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(2,4));

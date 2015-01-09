//write a function called addNumberArrays that takes 2 arrays of integers as parameters return a new array that has the sum of the elements at each position.

var addNumberArrays = function(){
  var arr1 = [1,2,3];
  var arr2 = [4,5,6];
  var arr3 = [];
  for (var i = 0; i < arr1.length; i++) {
    var ar1 = arr3.push(arr1[i] + arr2[i]);
  }
  return arr3;
}
console.log(addNumberArrays());

//instructor variation
var addNumberArrays = function(arr1, arr2){
  var arr3 = [];
  for (var i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i] + arr2[i]);
  }
  return arr3;
}
console.log(addNumberArrays([1,2],[3,4]));

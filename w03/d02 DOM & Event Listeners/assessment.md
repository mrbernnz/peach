####Write a function called addNumbers that takes 2 intergers as parameters and returns their sum.

```js
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
```

####Write a function called addNumberArrays that takes 2 arrays of integers as parameters return a new array that has the sum of the elements at each position.

```js
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
```

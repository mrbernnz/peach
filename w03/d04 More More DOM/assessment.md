####Write a function called doublePrint that takes a number parameter and prints double the value of the number.

```For example: doublePrint(3) would print 6.```

```js
var doublePrint = function(x){
  ans = x*2;
console.log(ans);
}
doublePrint(3);

//supports strings and integers
var doublePrint = function(x){
  ans = x+x;
  console.log(ans);
}
doublePrint(3);
```

####Write another function called doublePrintArrays that takes an array parameter and uses forEach to print double the value for each element in the array.

```
For example: doublePrint([1,2,3]) would print:
2
4
6
```

```js
//incomplete
var dbl = [1,2,3];

// var doublePrintArray = function(dbl){
//   dbl.forEach(function(double){
//     ans = double + double;
//     console.log(ans);
//   })
// }
//
// doublePrintArray(dbl);

// var arr = [];

// var doublePrint = function(double)
// {
//   ans = double + double;
//   console.log(ans);
// }

dbl.forEach(doublePrint);

var doublePrintRet = function(ddoublePrint,dbl)
{

}

// doublePrint([1,2,3])
```

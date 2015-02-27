Function every other
  - takes array of numbers
  - takes a number
  - return a new array
  [1,5,10,2,20,50]
  [8]

```js
function everyOther()
  {
    var arr = [1,5,10,2,20,50];
    arr.forEach(function(index)
    {
      cntr = 0;
      if (cntr%2===0) {
        var ind = index+8;
        console.log(ind);
      }
      else {
        var ind2 = index*8;
        console.log(ind2);
      }
      cntr++
    })
    // for (var i = 0; i < arr.length; i=i+2) {
    //   arr[i]+8;
    //   return arr;
    // }
  }
  everyOther();

//code
// var everyOther = function(ind,i)
// {
//   ind
// }
```

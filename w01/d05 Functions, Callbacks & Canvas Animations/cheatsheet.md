#### Functions

**Creating a function**

```js
var myfunc = function(param1, param2) {
  //do something with param1 and param2
  return something; //optional
}
```

**Calling a function**

```js
var a = //something;
var b = //something;
var return_value = myfunc(a, b);
```

#### Function Scope

```js
var a = 5;
var sum = function(a,b) {
  // here a is a parameter
  return a+b;
};

console.log(3, 4); // 7

// outside the function, a is 5 again
console.log(a); // 5
```

```js
var a = 5;
var multipleOfN = function(x, y) {
  // here we define a new variable using var
  var a = x * y;
  return a;
};

console.log(multipleOfN(3,7)); // 21

// Outside of the function, a is 5 again
console.log(a); // 5
```

```js
var a = 5;
var multiplyA = function(n) {
  // Here we are not using var,
  // so we are changing the outside a variable

  a = a * n;
  return a;
};

console.log(multiplyA(3)); // 15
console.log(a); // 15
```
#### Timers

**Call a function 2 seconds from now**
```js
var handle = setTimeout(myfunc, 2000);
//we can also remove that Timeout
clearTimeout(handle);
```

**Call a function every 2 seconds**
```js
var handle = setInterval(myfunc, 2000);
//we can remove that Interval
clearInterval(handle);
```

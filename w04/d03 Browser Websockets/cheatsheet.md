## JS Arrays and Hashes

What do we think happens here?
```js
var a = [1, 10, 15];
var b = a;
b.push(10);
console.log(b);
console.log(a);
```

a and b point to the same thing.

```js
var dontDoThis = function(arr) {
  arr.push(30);
}

var a = [5, 10];
dontDoThis(a);
console.log(a);
```

`dontDoThis` changes a
- people say that "`dontDoThis` mutates its parameter"

A function can also mutate an object:

```js
var no = function(a) {
  a.foo = "bar";
}
var o = {color: "purple"};
no(o);
console.log(o);
//{ color: 'purple', foo: 'bar' }
```

But functions will not mutate numbers or strings

```js
var ok = function(num) {
  num++;
}
var x = 10;
ok(x);
console.log(x);
//10
```

This function comes with arrays and mutates an array object.
```js
var a = [1,2];
var b = [3,6];
var c = a.concat(b);
//like var c = a + b for arrays
// but a and b are not changed
```

##Websocket Client (in the browser)
```js
var ws = new WebSocket("ws://localhost:3000");
ws.addEventListener("open", function(evt) {
  console.log("connected");
});

ws.addEventListener("message", function(evt) {
  console.log(evt.data);
});
```

## Websocket close event

Manually closing a connection
```js
ws.close()
```

Listening for the event (for when the other end closes the connection)
```js
ws.on("close", function() {
  //do something
})
```

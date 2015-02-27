## Basic Objects

Creating objects
```javascript
var obj = {};
var obj2 = { name: "doogie", age: 14};
```

Accessing values
```javascript
var obj = {name: "crawford"};
var name = obj["name"];
var also_name = obj.name
```

Changing and creating values
```javascript
var obj = {name: "amy"};
obj["name"] = "roger";
obj.name = "laura";
```

## Looping through Objects
```javascript
var obj = {name: "amy", age: 99};
var keys = Object.keys(obj);
for(var i=0; i< keys.length; i++) {
  var key = keys[i];
  var value = obj[key];
  console.log(value);
}
```

## this
```javascript
var f = function() {
  console.log(this.name)
}

var obj = {
  name: "sean",
  printName: f
}

var obj2 = {
  name: "david",
  heresMyName: f
}

//will print sean
obj.printName();

//will print david
obj2.heresMyName();
```

## constructors
```javascript
var F = function() {
  this.name = "sean"
}
var f = new F();
console.log("my name is " + f.name);
```

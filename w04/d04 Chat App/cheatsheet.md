## JSON Serialization

Converting from a javascript data type to a JSON string **(Serializing)**:
```js
var someData = {name: "lil", color: "beige"}
var myJson = JSON.stringify(someData);
```

Converting from a JSON string to a raw javascript data type **(Deserializing)**:
```js
var someData = JSON.parse(someJSON);
```

## String joining

```js
var a = [1,2,3,4];
var joined = a.join("-");
//joined now is "1-2-3-4"
var j2 = a.join("/");
//j2 now is "1/2/3/4"
```

#### Conditionals
```
if (condition) {
  //do something
} else if ( other_condition ) {
  //do something else
} else {
  //do something else
}
```

#### While loop
```
while ( condition ) {
  //do something
}
```

#### String concatenation
```
var first = "Doogie";
var last = "Howser";
var full = first + " " + last;
```

#### charAt
```
var word = "heya";

//this will be the letter h
var letterh = word.charAt(0);

//this will be the letter y
var lettery = word.charAt(2);
```

#### Random

```
//number between 1 and 10
var random = Math.floor(Math.random()*10) + 1;
```
#### Canvas Boilerplate

```html
<html>
<body>
  <canvas id="the_canvas" width="400" height="400"></canvas>
  <script>
    var canvas = document.getElementById('the_canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "red";
    ctx.fillRect (10, 10, 55, 50);
    ctx.fillStyle = "blue";
    ctx.fillRect (30, 30, 55, 50);
  </script>
</body>
</html>
```

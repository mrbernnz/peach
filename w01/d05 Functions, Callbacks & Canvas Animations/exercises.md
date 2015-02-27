![](http://nuclearcandy.com/wp-content/uploads/2009/11/Conjunction_Junction.jpg)
## Learning Objectives
  1. Get introduced to functions in JavaScript
  2. Get introduced to callbacks in JavaScript
  3. Animations in Canvas

#### Exercise: Double
Write a function that takes a number and returns its double

```js
var double = function(num) {
  var answer = num*2;
  return answer;
}

//now test out our function
var a = 5;
var double_a = double(a);

console.log("the double of " + a + " is " + double_a);
```

#### Exercise: Find the maximum
Write a function that takes 2 numbers as parameters and returns the maximum of those numbers.

Call this function 3 times with different parameters and log the results to the console.

```js
var a = 5;
var b = 10;

var max = function(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

var c = max(a,b);
```

**Bonus:** Make it take in 3 parameters.

#### Exercise: Find the area of a rectangle
Write a function that takes the width and height of a rectangle as parameters and returns the area of the rectangle. The area of a rectangle is ```width * height```.

Call this function 3 times with different parameters and log the results to the console.

####Solution
```js
var num1 = process.argv[2];
var num2 = process.argv[3];

var ar  = function(width, height){
  area = (width * height);
  return area;
}
var ans = ar(num1, num2);
console.log(ans);
```

**Bonus1:** Make another function to return the perimeter of the rectangle. The perimeter is ```width + width + height + height```

**Bonus2:** Make another function to return the area of a circle. The area of a circle is ```Math.PI * radius * radius```

#### Further Exercises
#### Exercise: Manage a Zoo
You are managing a zoo.  The zoo has the following animals: elephant, alligator, panda, lion, monkey, koala, tiger, t-rex, puffins, dodo, Crawford, and penguins.

Create functions for adding an animal to the zoo, removing an animal from the zoo, switching the positions of 2 animals from the zoo, sorting the animals by name, and reverse sorting them.

**Here's the catch**
  - Your function must take the zoo array as a **parameter** and return a brand new array.

You must:
  1. Add a kangaroo to the zoo.
  2. Remove the dodo.
  3. Switch the tiger and Crawford.
  4. Sort the animals by name.
  5. Reverse the array.

You may want to consult the Mozilla documentation for [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

####Solution
```js
//an array of zoo animals
var anmlp = ["elephant", "alligator", "panda", "lion", "monkey", "koala", "tiger", "t-rex", "puffins", "dodo", "Crawford", "penguins"];
//function that inputs other functions
var an = function(x){
  x();
  console.log(anmlp);
}
//add kangaroo to the anmlp array
var add = function(){
  anmlp.push("kangaroo");
}
//remove doco from anmlp array because it's extinct
var rmv = function(){
  anmlp.splice(anmlp.indexOf("dodo"), 1);
  // for (var i = 0; i < anmlp.length; i++) {
  //   if (anmlp[i] === "dodo") {
  //     anmlp.splice(i, 1);
  //   }
  // }
}
//switch the tiger and the Crawford position in the anmlp array
var splc = function(){
  var name1 = anmlp.indexOf("Crawford");
  var name2 = anmlp.indexOf("tiger");
  anmlp[name1] = "tiger";
  anmlp[name2] = "Crawford";
  // for (var i = 0; i < anmlp.length; i++) {
  //   if (anmlp[i] === "Crawford"){
  //     anmlp.splice(i, 1, "tiger");
  //   }
  //     // if(anmlp[i] === "tiger") {
  //     //   anmlp.splice(i, 1, "Crawford");
  //     // }
  //   }
}
//sort the anmlp array by name
var srt = function(){
  anmlp.sort();
}
//reverse sort the anmlp array
var rvrs = function(){
  anmlp.reverse();
}
//print the anmlp array in the order of the functions being called
an(add);
an(rmv);
an(splc);
an(srt);
an(rvrs);
```

## Callbacks

#### Say Hello to my Little Friend

Print ```Say Hello to my Little Friend``` to the terminal 2 seconds from now.

```js
var sayGoodMorning = function() {
  console.log('Good Morning!');
};

console.log('Hello!');

setTimeout(sayGoodMorning, 1000);

console.log('Goodbye!');
```

#### Say Hello again to my Little Friend

Print ```Say Hello Again to my Little Friend``` to the terminal **every** 2 seconds.

```js
var counter = 0
var sayHi = function() {
  console.log("hi");
  counter++;
  if(counter === 5){
  clearInterval(refreshIntervalId);
  };
}

var refreshIntervalId = setInterval(sayHi, 500);
```

## Canvas

#### Redraw the canvas every 20 ms

Take a canvas drawing of a square, and redraw it every 20 ms with a slightly different position.

```js
var canvas = document.getElementById('the_canvas');
var ctx = canvas.getContext('2d');

var x = 0;
var draw = function() {
  //THIRD
  //clear background
  ctx.fillStyle = "gray";
  ctx.fillRect(0,0, canvas.width, canvas.height);

  //SECOND
  //move the square to the right
  x += 1;
  //FOURTH
  //make sure it doesn't go off the screen though
  if (x > canvas.width) {
    x %= canvas.width;
    x = 0;
  }
  // FIRST
  //draw square in new position
  ctx.fillStyle = "red";
  ctx.fillRect (x, 300, 100, 50);
}

setInterval(draw, 2)
```


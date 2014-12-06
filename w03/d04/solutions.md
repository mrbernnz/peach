####Exercise double print gum
Write a function called `doublePrint` that takes a number parameter and prints double the value of the number.

For example: `doublePrint(3)` would print 6.

Solution:
```js
var doublePrint = function(num) {
  console.log(2 * num);
};

doublePrint(3); //6
```

####Exercise double print arrays
Write another function called `doublePrintArrays` that takes an array parameter and uses forEach to print double the value for each element in the array.

For example: `doublePrintArrays([1,2,3])` would print:  
2  
4  
6

Solution:
```js
var doublePrint = function(num) {
  console.log(2 * num);
};

var doublePrintArrays = function(nums) {
  nums.forEach(doublePrint);
};

doublePrintArrays([1,2,3]); //2 4 6
```

####Exercise: Doubleprint III: Return of Doubleprint

Write a function called doublePrintRet that takes an array parameter and uses forEach to add double each element to a new array.  Return that new array from the function.

For example: `doublePrintRet([1,2,3])` would return `[2,4,6]`.

```js
var doublePrintRet = function(nums) {
  var doublesArray = [];
  nums.forEach(function(num) {
    doublesArray.push(num * 2);
  });

  return doublesArray;
};

var arr = [1,2,3];
var result = doublePrintRet(arr);
console.log(result);
```

####Exercise: Manipulation of the DOM kind
Create an HTML page with a `<p>` tag and a text input.  Add an event listener to the text input box that listens for the `keyup` event and updates the `<p>` to whatever is in the text input box.


**domManipulation.html**
```html
<html>
  <head></head>
  <body>
    <input type = "text" id = "myInput"></input>
    <p id="myParagraph"></p>
    <script src = "domManipulation.js"></script>
  </body>
</html>
```

**domManipulation.js**
```js
var myInput = document.querySelector("#myInput");
myInput.addEventListener("keydown", function() {
  var input = document.querySelector("#myInput");
  var paragraph = document.querySelector("#myParagraph");
  var text = input.value;
  paragraph.innerText = text;
});
```

####Todo: Make an exercise
Make a todo list in HTML.  It will contain one text input box, 1 button, and 1 unordered list.
Add an event handler for the button that will add whatever is in the text input box to the unordered list.

**Bonus:** Add another event handler for pressing enter in the text input box.  This will also add whatever is in the text input box to the unordered list.


```html
<html>
<body>

<input type="text">
<button>Click me</button>
<ul></ul>

<script>
  var button = document.querySelector("button");
  button.addEventListener("click", function() {
    var ul = document.querySelector("ul");
    var textbox = document.querySelector("input");
    var text = textbox.value;
    var li = document.createElement("li");
    li.innerHTML = text;
    ul.appendChild(li);
  })
</script>

</body>
</html>
```

**Bonus**

```html
<html>
<body>

<input type="text">
<ul></ul>

<script>
  var txtbox = document.querySelector("input");
  txtbox.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      var ul = document.querySelector("ul");
      var textbox = document.querySelector("input");
      var text = textbox.value;
      var li = document.createElement("li");
      li.innerHTML = text;
      ul.appendChild(li);
      textbox.value = "";
    }
  })
</script>

</body>
</html>
```

####Exercise: Look at the size of that hamster!
#####Part I
1. Find 3 images of a hamster on the internet
1. Make an HTML page with an image tag.  
2. Add 3 radio buttons with the labels first, second, and third.
3. Make a function that will update the source of the hamster image to be the first, second, or third image, based on the value of the radio buttons.

#####Part II
Add a button that will call this function.

#####Part III
Have the radio buttons call the function on click.

```html
<html>
<body>
<input type="radio" name="hamster">First<br>
<input type="radio" name="hamster">Second<br>
<input type="radio" name="hamster">Third<br>
<button>UpdateHamsterManually</button><br>
<img></img>
<script charset="utf-8">
  var urls = [
  "http://www.petscorner.co.uk/petopedia/wp-content/uploads/syrian-hamster-4.jpg",
  "http://a-z-animals.com/media/animals/images/470x370/hamster3.jpg",
  "http://www.tierfreund-max-hamster.de/images/Hamster.jpg"
  ];
  var updateImage = function() {
    var radios = document.querySelectorAll("input");
    for(var i=0; i<radios.length; i++) {
      if (radios[i].checked === true) {
        var image = document.querySelector("img");
        image.src = urls[i];
      }
    }
  }

  //part 2
  var button = document.querySelector("button");
  button.addEventListener("click", updateImage);

  //part 3
  var radios = document.querySelectorAll("input");
  for(var i=0; i<radios.length; i++) {
    radios[i].addEventListener("click", updateImage);
  }
</script>
</body>
</html>

```


####Exercise: Random Squares
1. Write a function that draws a square in a new random place.
2. Write a function that will start an animation that will draw a new square every 10 seconds.
3. Make a button that will start this animation.

```html
<html>
<body>
<canvas id="canvas" width="300" height="300"></canvas>
<button>Start Animation</button>
<script>
  var canvas = document.querySelector("canvas");
  var ctx = canvas.getContext("2d");
  var randSquare = function() {
    var randX = Math.random() * canvas.width;
    var randY = Math.random() * canvas.height;
    ctx.fillStyle = "red";
    ctx.fillRect (randX, randY, 20, 20);
  }

  var startAnimation = function() {
    setInterval(randSquare, 10000);
  }

  var button = document.querySelector("button");
  button.addEventListener("click", startAnimation);
</script>
</body>
</html>
```


####Todo: Part II - Ain't it a drag?
On your todo list from earlier, add an event listener to each list item that will delete the item if it is dragged.

**Hint: Listen for the "drag" event.**

```html
<html>
<body>

<input type="text">
<button>Click me</button>
<ul></ul>


<script>
  var button = document.querySelector("button");
  button.addEventListener("click", function() {
    var ul = document.querySelector("ul");
    var textbox = document.querySelector("input");
    var text = textbox.value;
    var li = document.createElement("li");
    li.innerHTML = text;
    li.setAttribute("draggable", "true");
    li.addEventListener("dragstart", function() {
      //note how li is in scope within this listener
      //so i can refer to myself by using that variable
      ul.removeChild(li);
      //alternatively: ul.removeChild(this)
    })
    ul.appendChild(li);
  })
</script>

</body>
</html>
```

####Exercise: Don't take my word for it
[learnlayout.com](http://www.learnlayout.com/) is a great site that walks through how to position your DOM elements with CSS. Please read the entire site. There's a lot of information in there, but there's no need to have this stuff memorized; the internet isn't going anywhere (yet). The most important parts are probably the sections on display, margin, width, and positioning.

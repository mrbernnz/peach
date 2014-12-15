## Learning Objectives
  1. Understand Looping, particularly a while loop, in Javascript
  2. Dive deeper into Strings
  3. Learn about the HTML5 Canvas element

## Loops

#### Exercise: Awkward date

Write a javascript application that logs "I'm fine, how are you?" 5 times.
```
console.log("Hi, how are you?")
var counter = 0
while (counter < 5) {
  console.log("I'm fine, how are you?")
  counter ++
}
```
** Bonus: ** Log it x times.

#### Exercise: FizzBuzz in a loop
Write a javascript application that logs all numbers from 1 - 100. If a number is divisible by 3 log "Fizz" instead of the number. If a number is divisible by 5 log "Buzz" instead of the number. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

```
var counter = 0
while (counter < 100) {
  if (counter % 15 === 0) {
    console.log("FizzBuzz")
  } else if (counter % 5 === 0) {
    console.log("Buzz")
  } else if (counter % 3 === 0) {
    console.log("Fizz")
  } else {
    console.log(counter)
  }
  counter ++
}
```


#### Exercise: Print the Vowels

Write a javascript application that takes a string as an argument and logs every vowel in the string.

```
var word = process.argv[2]
var counter = 0;

while (counter < word.length) {
  var let = word[counter];

  if (let==="a" || let==="e" || let === "i" || let ==="o" || let === "u") {
    console.log(let);
  }

  counter++;
}
```


** Bonus: ** Build a new string with the vowels.

#### Exercise: Reverse a string

Write a javascript application that takes a string as an argument and returns that string in reverse.

```
var string = "asdf"
var newstring = ""
var counter = 0
while (counter < string.length) {
  newstring += string[string.length - (counter + 1)]
  counter ++
}
console.log(newstring)
```


## Math.random()

#### Exercise: Guess the number game

Write a javascript application that takes an integer as an argument and creates a random number. If the random number and the argument are the same log "success!". Otherwise, log "sorry, we were looking for " the random number.

```
var guess = parseInt(process.argv[2])
var answer = Math.floor(Math.random()*10) + 1
if (guess === answer) {
  console.log("correct!")
} else {
  console.log("sorry, the answer is " + answer + ".")
}
```

## Canvas

#### Exercise: Draw a square in each corner

Change the javascript in the boiler plate so there is a 50x50 squre in each corner of the canvas.

```
ctx.fillStyle = "red";
ctx.fillRect (0, 0, 50, 50);

ctx.fillStyle = "blue";
ctx.fillRect (350, 0, 50, 50);

ctx.fillStyle = "red";
ctx.fillRect (350, 350, 50, 50);

ctx.fillStyle = "blue";
ctx.fillRect (0, 350, 50, 50);
```

#### Exercise: Draw 4 squares in each of these squares

Next, modify the previous exercise so there is a 25x25 square in the middle of each of the 4 squares. Don't forget to change the colors!

```
ctx.fillStyle = "red";
ctx.fillRect (00, 00, 50, 50);

ctx.fillStyle = "blue";
ctx.fillRect (350, 00, 50, 50);

ctx.fillStyle = "red";
ctx.fillRect (350, 350, 50, 50);

ctx.fillStyle = "blue";
ctx.fillRect (00, 350, 50, 50);

ctx.fillStyle = "yellow";
ctx.fillRect (12, 12, 25, 25);

ctx.fillStyle = "purple";
ctx.fillRect (363, 12, 25, 25);

ctx.fillStyle = "green";
ctx.fillRect (363, 363, 25, 25);

ctx.fillStyle = "orange";
ctx.fillRect (12, 363, 25, 25);
```

#### Exercise: Draw a certain number of squares

Use the prompt command to get a number from the user; draw that many squares.  Hint: use a loop to change the location of each square.

```
var counter = 0

var num = window.prompt("how many squares?")

while (counter < num) {
  ctx.fillStyle = "red";
  ctx.fillRect (counter*10, counter*20, 50, 50);

  counter ++
}
```

#### Put a square in a random place

Change the javascript in the boiler plate so each time the page is refreshed there is a square in a random place.

```
var random = Math.floor(Math.random()*350)
var random2 = Math.floor(Math.random()*350)

ctx.fillStyle = "red";
ctx.fillRect (random, random2, 50, 50);
```

#### Random colors using rgb

Colors can be represented in a variety of ways. Instead of using a color name in a string, use the RGB format, which looks like this:

    "rgb(100, 50, 100)"

Change the javascript in the boiler plate so when the page is refreshed the color of the square changes.

** Bonus: ** Use hex colors instead.

```
var random = Math.floor(Math.random()*255)
var random2 = Math.floor(Math.random()*255)

//ctx.fillStyle = "#3f780c";

ctx.fillStyle = "rgb(" + random + "," + random2 + "," + random + ")";

ctx.fillRect (0, 350, 100, 50);
```

##Even further bonuses!
#### Bonus: Pyramid
[pyramid](pyramid.md)

#### Bonus: Palindrome
Write a javascript application that takes a string as an argument and returns "That's a palindrome!" if the string is a palindrome.

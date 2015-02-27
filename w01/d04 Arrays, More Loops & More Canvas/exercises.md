## Learning Objectives
  1. Understand arrays in JavaScript
  2. Further your understanding of loops with for loops.
  3. Continuing to use Canvas

#### Exercise: Counting
  1. Create an array of the numbers 1 - 100
  2. return a random index from the array

####Solution
```js 
/*var arr1 = [];
var num  = 0

while (num <= 100) {
  arr1.push(num);
  num++;
}
var ind = Math.floor(Math.random(0) * 100);
console.log(arr1[ind]);*/

var arr1 = [];
var ind = Math.floor(Math.random(0) * 100);

for (var num = 0; num <= 100; num++) {
  arr1.push(num);
}
console.log(arr1[ind]);
```
  
#### Exercise: Sports
  Reference site: - [MDN - arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  1. Create an array of your 5 favorite sporting teams. (Don't know sports? Improvise!)
  2. Using the reference above, experiment with pop, push, reverse, shift, and unshift.  These methods will alter your array, so when using these methods you should create a new array.  For example: newArray = oldArray.reverse().
  3. Also using the reference above, experiment with contains, join, indexOf, lastIndexOf, and toString. These methods don't change the array, however if you want to continue using your new array you will still need to create a new array.

####Solution
```js 
var sprt = ["Giants", "Mets", "Nets", "Arsenal", "RedBull"]
console.log(sprt);
```

#### Exercise: Yell at the Ninja Turtles
  1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
  2. Call to upperCase() on each of them and print out the result.

** Bonus: ** Use a while loop to do this.  Note the differences between these approaches.

####Solution
```js 
//Names of Radioactive Turtles.
var tmnt = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
var cntr = 0;

//Loop the names and capitalize them.
while (cntr < tmnt.length) {
  //Push array with upcase methond
  console.log(tmnt[cntr].toUpperCase());
  cntr++;
}
```

#### Exercise: Draw a certain number of squares

Make an array of colors including at least one rgb value, one hex value, and one string value (like "blue").

Use the prompt command to get a number from the user; draw that many squares and alternate the colors using the colors in the array.

  Hint: use a loop to change the location of each square.

####Solution
```html
<html>
<body>
  <canvas id="canvas" width="900" height="900"></canvas>
  <script>
  //Prompt user for a number
  var numb = parseInt(prompt("Enter a number"));
  //Array of colors
  var clrs = ["red", "#a9d8ab", "rgb(155, 102, 102)", "#1948b7","#f9b5a1"];


    for(i = 0; i < numb; i++){
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');

      //Random position of the squares.
      var c = Math.floor(400 * Math.random());
      var d = Math.floor(400 * Math.random());
      //Fill the individual square with a color from the clrs array.  Cycle through the array of colors depending on the inputted number.
      ctx.fillStyle = clrs[i % clrs.length];
      //Display the sequence of the array.
      console.log("I is " + i % clrs.length);
      //Plot the position of the square.
      ctx.fillRect (c, d, 50, 50);
    }
  </script>
</body>
</html>
```

#### Exercise: Fibonacci Sequence
The Fibonacci sequence is an infinite sequence where each element in the sequence is the sum of the previous 2 numbers.  The first 2 numbers are 0 and 1.  The first 5 numbers are 0, 1, 1, 2, 3.

Write a progarm that goes from 0 to 100 and prints out the first 100 elements of the Fibonacci sequence.  Use a for loop.

####Solution
```js 
//initial fibonacci sequence
var fib =[0, 1];

//Loop through the sequence until 100.
for (var  i = 2; i < 100; i++) {
  //add the last two numbers in the sequence together to get the next number in the sequence.
  fib.push(fib[i-1]+fib[i-2]);
  //print out the first 100 numbers in the sequence.
  console.log(fib);
}
```

** Bonus: ** Have the program take an argument and print out that many elements of the sequence.

####Solution
```js
//user inputs a number value.
var numb = process.argv[2];
//initial fibonacci sequence.
var fib =[0, 1];

//loop through the sequence for the input number.
for (var i = 2; i < numb; i++) {
  //add the last two numbers in the sequence together to get the next number int the sequence.
  fib.push(fib[i-1]+fib[i-2]);
  //print out the first 100 numbers in the sequence.
}
console.log(fib);
```

#### Exercise: Black Jack

###Part 1
  - Create an array with all the cards in a deck (2-10, J, Q, K A)
  - **Don't** explicitly just write out an array with 52 cards
    - You can write out a smaller array and then generate the rest
    - Output the array of cards

####Solution
```js 
//An array of card numbers
var crd = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
//An array of card suits
var suit = ['Spade', 'Diamond', 'Heart', 'Club'];
//Empty array
var crdst = [];
//Loop through crd array and suit array lengths for all values
for (var i = 0; i < crd.length; i++) {
  for (var j = 0; j < suit.length; j++) {
    //Add combination of both arrays' values into crdst array
    crdst.push(crd[i] + suit[j]);
  }
}
//Print deck of cards.
console.log(crdst);
```

------

###Part 2
- Goal: To create a program that chooses two cards from the deck *at random* and outputs its value in blackjack.
- To calculate the value of a hand of cards:
  - 2-10 have the value of their number
  - All face cards have the value of 10
  - Ace is 1

####Solution
```js
//not done
//choose two cards
//var chstw = process.argv[2];

//An array of card number
var crd = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
//An array of card suit
var suit = ['Spade', 'Diamond', 'Heart', 'Club'];
//Empty array to insert card number and suit
var crdst = [];
var twcrds = []

//Loop through crd array and suit array lengths for all values
for (var i = 0; i < crd.length; i++) {
  for (var j = 0; j < suit.length; j++) {
    //Add combination of both arrays into crdst array
    crdst.push(crd[i] + suit[j]);
    //Loop through the newly created crdst array
    // for (var k = 0; k < crdst.length; k++) {
    //   //Add two different values from crdst array to twcrds array
    //   twcrds.push(crdst[k]+ " " +crdst[k+1]);
    //
    //   twcrds = crdst[Math.floor(crd.length * Math.random())] + crdst[Math.floor(suit.length * Math.random()) + 1];
    //
    // }
  }
}
//Print two cards
//console.log(twcrds[k]);
```

-----

###Part 3
- Goal: To create a program that chooses 3 cards *at random*,
- Have it output the cards and their blackjack value or
  - Also include whether that value is "bust".
- Loop this program until there are no cards left in the deck.

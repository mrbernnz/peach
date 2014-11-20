## Learning Objectives
  1. Understand arrays in JavaScript
  2. Further your understanding of loops with for loops.
  3. Continuing to use Canvas

#### Exercise: Counting
  1. Create an array of the numbers 1 - 100
  2. return a random index from the array
  
#### Exercise: Sports
  Reference site: - [MDN - arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  1. Create an array of your 5 favorite sporting teams. (Don't know sports? Improvise!)
  2. Using the reference above, experiment with pop, push, reverse, shift, and unshift.  These methods will alter your array, so when using these methods you should create a new array.  For example: newArray = oldArray.reverse().
  3. Also using the reference above, experiment with contains, join, indexOf, lastIndexOf, and toString. These methods don't change the array, however if you want to continue using your new array you will still need to create a new array.

#### Exercise: Yell at the Ninja Turtles
  1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
  2. Call to upperCase() on each of them and print out the result.

** Bonus: ** Use a while loop to do this.  Note the differences between these approaches.

#### Exercise: Draw a certain number of squares

Make an array of colors including at least one rgb value, one hex value, and one string value (like "blue").

Use the prompt command to get a number from the user; draw that many squares and alternate the colors using the colors in the array.

  Hint: use a loop to change the location of each square.

#### Exercise: Fibonacci Sequence
The Fibonacci sequence is an infinite sequence where each element in the sequence is the sum of the previous 2 numbers.  The first 2 numbers are 0 and 1.  The first 5 numbers are 0, 1, 1, 2, 3.

Write a progarm that goes from 0 to 100 and prints out the first 100 elements of the Fibonacci sequence.  Use a for loop.

** Bonus: ** Have the program take an argument and print out that many elements of the sequence.

#### Exercise: Black Jack

###Part 1
  - Create an array with all the cards in a deck (2-10, J, Q, K A)
  - **Don't** explicitly just write out an array with 52 cards
    - You can write out a smaller array and then generate the rest
    - Output the array of cards

------

###Part 2
- Goal: To create a program that chooses two cards from the deck *at random* and outputs its value in blackjack.
- To calculate the value of a hand of cards:
  - 2-10 have the value of their number
  - All face cards have the value of 10
  - Ace is 1

-----

###Part 3
- Goal: To create a program that chooses 3 cards *at random*,
- Have it output the cards and their blackjack value or
  - Also include whether that value is "bust".
- Loop this program until there are no cards left in the deck.

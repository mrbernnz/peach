#Create a new cereal!

You are working for a large cereal company that is having trouble coming up with the next popular cereal.  They have asked you to write a program to come up with some ideas.

They have given you the following lists of words/phrases to choose from:

  1. Apple, Cap'n, Cinammon, Cocoa, Frosted, Fruit, Honey Bunches of, Raisin, Shredded, Toasted
  2. Bran, Crunch, Crisp, Flakes, Jacks, Krispies, Loops, Pebbles, Pops, Puffs

Your program will create suggestions by combining random items from the first list with random items from the second list.

Your program will take an argument for the number of suggestions that will be produced by your program and will print the results to the terminal.

Save this in a file called cereal.js and push it to its own Github repo.

For more info on cereals that have come out over the years, check out this page: http://en.wikipedia.org/wiki/List_of_breakfast_cereals

####Solution
```js
//create two arrays of cereal names

//Have the user input a number for the number of random cereal titles.
var numb = process.argv[2];

//Two sets of arrays of strings for titles of a cereal title.
var cerealn1 = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded", "Toasted"];
var cerealn2 = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"];


for(var i=0; i<numb; i++){
  //Loop through the first array for the first part of the cereal title.
  var n1 = cerealn1[Math.floor(cerealn1.length * Math.random())];
  //Loop through the second array for the second part of the cereal title.
  var n2 = cerealn2[Math.floor(cerealn2.length * Math.random())];

  //Print out the number of random cereal titles.
  console.log(n1 +" "+ n2);
}
```

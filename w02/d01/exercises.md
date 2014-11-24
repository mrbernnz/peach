
![](https://pythoncodeshark.files.wordpress.com/2014/01/oop-meme.jpg)
## Learning Objectives
  1. Basic Objects and Key-Value pairs
  2. Looping through Objects
  3. Methods, Constructors, and OOP

## Exercises

#### Breakfast Club Cast

<img src="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/411667_441603715867202_685105596_o.jpg" height="200" width="200" >

Use the [Breakfast Club Imdb Page](http://www.imdb.com/title/tt0088847/fullcredits?ref_=tt_cl_sm#cast) to construct a hash where the keys are **character names** and the values are **actor names**. Include at least 5 characters.

Create a command line program using this hash that:
- takes a **character name** as an argument
- prints out the name of the actor that played that character


Don't forget to use quotes around the argument that you send to your program:
```
$ node breakfastclub.js "Andrew Clark"
Emilio Estevez
```

#### Favorite colors

Copy and paste the below hash of people's favorite colors. Use the  ```Object.keys``` method to grab all of the keys from this hash and loop through them one by one. Using that loop, only print the people from this hash that have a favorite color of pink or purple.

```
var colors = {
  dan: "purple",
  lisa: "kale",
  carl: "green",
  lenny: "pink",
  tina: "maroon",
  ted: "yellow",
  crawford: "pink",
  kobe: "silver",
  david: "white",
  sean: "purple",
  nina: "black",
  robyn: "aqua",
  larry: "orange",
  sam: "purple"
}
```

#### Exercise: Gather info for the Ninja Turtles

<img src="http://steve-lovelace.com/wordpress/wp-content/uploads/2013/10/teenage-mutant-ninja-turtles-in-hogwarts-colors.png" width=70% >


Write objects that will contain the following info about the Ninja Turtles:  
name, color, weapons, namedAfter, likesPizza.

For reference:  
Leonardo - blue, ninjato, Leonardo da Vinci, true  
Michelangelo - orange, nunchucks, Michelangelo Buonarroti, true  
Raphael - red, sai, Raffaello Sanzio da Urbino, true  
Donatello - purple, bo, Donato di Niccolo di Betto Bardi, true

Store the objects in an array and print out the name for each turtle.  
**Bonus:** Print out the information for every turtle like this:
```
Leonardo wears a blue bandana, his weapon is ninjato, he is named after Leonardo da Vinci, and he likes pizza.
```

### Exercise: Make Leonardo eat pizza
Add a boolean property to Leonardo called ```pizzaEaten``` (initially set to false).  
Add a method to Leonardo called ```eatPizza()``` which does the following:  
1. If ```pizzaEaten``` is true, print out "Leonardo has already eaten pizza." and set ```pizzaEaten``` to false.
2. If ```pizzaEaten``` is false, print out "Leonardo is eating pizza." and set ```pizzaEaten``` to true.  


### Exercise: Make a Turtle constructor
Make a ```Turtle``` constructor that takes a name, a color, and a weapon.  
Also add a property called `likesPizza` that is set to true.  
Add the ```pizzaEaten``` property and ```eatPizza()``` method from the last exercise, but use the turtle's name instead of just Leonardo's.

Create an array of turtles using the data from the first exercise.

To verify everything works:  
1. Change the name of one of the turtles to your own name.  
2. Print out the weapon of that turtle.  
3. Add a new turtle for the person sitting next to you.  
4. Print out the contents of the turtles array.  


### Further Exercise: Tamagotchi

<img src="http://upload.wikimedia.org/wikipedia/commons/f/f2/Tamagotchi_0124_ubt.jpeg" width=50% >

For those who don't remember (or choose to forget), Tamagotchis were "digital pets" that you could carry around with you and feed them, clean up after them, pet them, and try to keep them happy.

Make a ```Tamagotchi``` constructor. Give it the following properties:  
1. a hungry property (initially false)  
2. a sick property (initially false)  
3. an age of 0  

and give it the following methods:

1. ```feed()``` - if hungry is true, print "That was yummy!" and set hungry to false.  If hungry is false, print "No thanks, I'm full." and set hungry to true.  
2. ```sleep()``` - prints out "zzzzzzz" (use as many z's as you want)
3. ```medicate()``` - if sick is true, print "I feel much better!" and set sick to false.  If sick is false, print "No thanks, I feel fine." and set sick to true.
4. ```increaseAge()``` - increase the age by one and print "Happy Birthday to me! I am " + age + " years old!"

Now make a variable named dog that is set to
 a new Tamagotchi.  

Add the following methods to it:  
1. ```bark()``` - prints out "ruff ruff  
2. ```goOutside()``` - prints out "I own that tree now!"  

Make a variable named cat that is set to a new Tamagotchi.  Add the following methods to it:  
1. ```meow()``` - prints out "Meow!"  
2. ```useLitterBox()``` - "Burried treasure!"  

Make a variable named fish that is set to a new Tamagotchi.  Add the following method to it:  
1. ```swim()``` - prints out "Just keep swimming..."  

Try the following:  
1. Feed the dog twice.  
2. Increase the dog's age twice.  
3. Make the dog bark.  
4. Make the dog go outside.  
5. Make the cat meow.  
6. Make the cat sleep.  
7. Make the cat use the litter box.  
8. Give the fish medicine twice.  
9. Make the fish swim.  

## Random User Generator

Create a sinatra server
* With one route at `/`
* That when hit serves up a `person.erb`
* You must send your erb a randomly generated
  1. First name
  2. Hometown
  3. Favorite Color
  4. Favorite Band
  5. Favorite post-impressionist artist
  6. Or whatever you can think of that would be good to know about a person
* Your erb template should display these properties in some visually pleasing way (at the least align stuff)
* If this is done right, every time you refresh your browser a new randomly generated user will appear

**Q**: How in the world do I randomly generate all this?!

**A**: For each attribute of a person, just hardcode an array of possible values, and choose one randomly to send to your erb.

For instance:
```rb
var names = ["jean", "jam", "jawford"]
var random_name = # code to pick an element from names at random goes here
var colors = ["purple", "grey", "white"]
var random_color = # gotta figure this part out
#now send all these random attributes over to an erb and serve it up!
```
###Bonus-ish
Now, do this in javascript. Instead of a Sinatra server write an express server, and instead of using ERBs use EJS.

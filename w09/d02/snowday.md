# Snow Day!

## Short Answer Questions
Do this first.

- Create a text file and write your answers to the following questions in that file. Put it on github and hipchat Crawford a link.
- Each answer should only be 1 - 5 sentences long.
- Crawford is a stickler for spelling and grammar (believe it or not!). Soon you will be writing cover letters, and hopefully soon after that, emails to clients. Be sure to display how professional you are in these answers.

---
- What is the difference between an API and a server?

- what does a DNS server do when you type "www.google.com" into an address bar?

- What are some differences between a single page application and a multipage application? List one example of each.

- Why do we use RESTful routes?

- What is an API key and why are they used?


## Some Brain Teasers
These are meant to stretch your brain a bit, as you will face some intellectual challenges in your future.

### Primer
- Write a command line application in ruby that prints all prime numbers between 1 and 100
- Do not just copy and paste these numbers, you should programmatically determine which numbers are prime.
- Do not use Prime.each
- Your program should run once and then exit
- Here is a snippet of sample output:
```
2
3
5
7
9
11
13
...
```

### Filter
- Write a command line application in javascript.
- The application should have a function called zeroFront that returns an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array.
- The order of the non-zero numbers does not matter.
-So [1, 0, 0, 1] becomes [0 ,0, 1, 1]. You may modify and return the given array or make a new array. For example:
```
zeroFront([1, 0, 0, 1])
#=> [0, 0, 1, 1]
zeroFront([0, 1, 1, 0, 1])
#=> [0, 0, 1, 1, 1]
zeroFront([1, 0})
#=> [0, 1]
```

### Alphabetter
- Write a command line application in ruby.
- The application should have a method called ```countr``` that takes a string and returns the sum of each of its letter's position in the alphabet.

EXAMPLE:
Calling the method with a string of "dog" would return 26 because "d" is 4th letter in the alphabet, "o" is the 15th, and "g" is the 7th. Adding all of these numbers together results in 26.
```
def countr(string, alphabet)
enter your code here
end

countr("dog", alphabet)
#=> 26
```

### Chocolatier
- We want to make a package of exactly ```goal``` kilos of chocolate. We have ```small bars``` (1 kilo each) and ```big bars``` (5 kilos each).
- Write a command line application that has a function that takes three arguments: an amount of small bars, an amount of big bars, and a goal weight.
- Return how many small bars are needed to reach the goal weight.
- If there are not enough small bars provided to reach the goal return -1.

```
def make_chocolate(small, big, goal)
# your code here
end


make_chocolate(4, 1, 9)
#=> 4
make_chocolate(2, 2, 8)
#=> -1
make_chocolate(4, 1, 7)
#=> 2
make_chocolate(3, 3, 17)
#=> 2
make_chocolate(3, 3, 19)
#=> -1
```

## A Short Server Review
Write an express server that reacts to the following routes in the following ways:

- /color/:css_color
  - the word in the url should appear in the browser in that color. go [here](http://www.crockford.com/wrrrld/color.html) for a list of valid css colors.

- /reverse/:word
  - the word in the url should appear in reverse.

- /length/:word
  - the browser should display how many letters are in the word in the url.

- /color/reverse/:css_color/:word
  - the word in the url should be displayed in reverse and in the color specified in the url.


## RESTful review
Write an API using Sinatra and RESTful routes that reacts to the following http verbs and routes in the following ways:

- GET /dwarves
  - shows the names of roughly seven dwarves

- GET /dwarf/:id
  - shows the name of one dwarf

- PUT /dwarf/:id
  - updates the name of one dwarf

- POST /dwarf
  - create a dwarf

- DELETE /dwarf/:id
  - delete a dwarf

#### Bonus:
write an app to hit your API.
#### Bonus Bonus:
use AJAX instead of forms.

## Work on your portfolio

Here are some ideas if you finish the above or want to move on to something else.

### Chat App
- Review and refactor your chat app and fix any broken features. Want to start over and need some help? [look here](https://github.com/ga-students/peach/tree/master/w09/d02/chat-starter)

- Persist your chat history by saving it to an external file.

- Create an api in either express or sinatra that allows the user to view the chat history.

Go nuts! Here are some ideas:

- Allow a user to upload an image that appears with or instead of the user's name.

- Allow a user to edit their name.

- Create a weather bot, so that when a user types "/weather ZIP" the weather underground api is consumed and a chatbot puts the 3 day forecast for the referenced zip code into chat.

- Do the same, but with the omdb api. Or maybe randomthoughts.link....


### Work on this past weekend's projects and review exercises
- This is just here because I love bullet points.

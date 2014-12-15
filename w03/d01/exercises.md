###Objectives:  
1. Use anonymous functions as parameters
2. Understand git cloning and pulling
3. Create HTML lists, headers, and footers
4. Use basic CSS colors, fonts, and text styles.

## Anonymous Functions
#### Exercise: Call In Five

Write the function ```callInFive```
- takes a function as a parameter
- calls that function in five seconds

Call this function passing in an anonymous function that prints something to the terminal.

```
var callInFive = function(func) {
  setTimeout(func, 5000);
}

callInFive(function() {
  console.log('yo');
})
```
## Git/Github Repo
#### Exercise
Find a project on Github that is interesting. [Github Explore](https://github.com/explore) is a good place to start. Clone it to your local computer in any directory you want.

Once you find a good project hipchat a link to the github repo to the Team Princess chat room.

## CSS

####Exercise
Make all h1 tags red.

```html
<html>
<body>
<style>
h1 { color: red }
</style>
<h1>Welcome Princess Peach Students!</h1>
<h2>This is an introduction to CSS</h2>
</body>
</html>
```

####Exercise: Make a list of animals!
Make an unordered HTML list of the following animals:  
1. mouse  
2. canary  
3. penguin  
4. salmon  
5. cat  
6. goldfish  
7. dog  
8. sheep  
9. parakeet  
10. tuna  

Make all the mammals red, all the birds blue, and all the fish orange.

```
<html>
<body>
<style>
li.mammal { color: red }
li.bird { color: orange }
li.fish { color: yellow }
</style>  

<ul>
<li class="mammal">mouse</li>
<li class="bird">canary</li>
<li class="bird">penguin</li>
<li class="fish">salmon</li>
<li class="mammal">cat</li>
<li class="fish">goldfish</li>
<li class="mammal">dog</li>
<li class="mammal">sheep</li>
<li class="bird">parakeet</li>
<li class="fish">tuna</li>
</ul>
</body>
</html>
```

####Exercise: Play with ids!
Take the list from the last episode and apply the following colors to it:

- mouse - <span style = "color: gray">gray</span>
- canary - <span style = "color: orangeRed">orangeRed</span>
- penguin - <span style = "color: black">black</span>
- salmon - <span style = "color: salmon">salmon</span>  
- cat - <span style = "color: sienna">sienna</span>
- goldfish - <span style = "color: gold">gold</span>  
- dog - <span style = "color: tan">tan</span>  
- sheep - <span style = "color: steelBlue">steelBlue</span>
- parakeet - <span style = "color: lime">lime</span>  
- tuna - <span style = "color: purple">purple</span>  

In addition, add the following background colors to your existing classes:
- mammal - lavenderBlush
- bird - lightGray
- fish - lightYellow

```
<html>
<body>
<style>
li.mammal { background-color: lavenderBlush }
li.bird { background-color: lightGray }
li.fish { background-color: lightYellow }

li#mouse { color: gray }
li#canary { color: orangeRed  }
li#penguin { color: black }
li#salmon { color: salmon}
li#cat { color: sienna }
li#goldfish { color: gold }
li#dog { color: tan }
li#sheep { color: steelBlue }
li#parakeet { color: lime }
li#tuna { color: purple }
</style>
<ul>
<li class="mammal" id="mouse">mouse</li>
<li class="bird" id="canary">canary</li>
<li class="bird" id="penguin">penguin</li>
<li class="fish" id="salmon">salmon</li>
<li class="mammal" id="cat">cat</li>
<li class="fish" id="goldfish">goldfish</li>
<li class="mammal" id="dog">dog</li>
<li class="mammal" id="sheep">sheep</li>
<li class="bird" id="parakeet">parakeet</li>
<li class="fish" id="tuna">tuna</li>
</ul>
</body>
</html>
```
####Exercise: Bold, italics, and underline (oh my!)
Use the previous exercise and make the mammals bold, the birds italic, and the fish underlined.

```
<html>
<body>
<style>
li.mammal {
  background-color: lavenderBlush;
  font-weight: bold;
}

li.bird {
  background-color: lightGray;
  font-style: italic;
}

li.fish {
  background-color: lightYellow;
  text-decoration: underline;
}

li#mouse { color: gray }
li#canary { color: orangeRed  }
li#penguin { color: black }
li#salmon { color: salmon}
li#cat { color: sienna }
li#goldfish { color: gold }
li#dog { color: tan }
li#sheep { color: steelBlue }
li#parakeet { color: lime }
li#tuna { color: purple }
</style>

<ul>
<li class="mammal" id="mouse">mouse</li>
<li class="bird" id="canary">canary</li>
<li class="bird" id="penguin">penguin</li>
<li class="fish" id="salmon">salmon</li>
<li class="mammal" id="cat">cat</li>
<li class="fish" id="goldfish">goldfish</li>
<li class="mammal" id="dog">dog</li>
<li class="mammal" id="sheep">sheep</li>
<li class="bird" id="parakeet">parakeet</li>
<li class="fish" id="tuna">tuna</li>
</ul>
</body>
</html>
```

####Exercise: Run for the border
Use the same file from the previous example for this exercise. Add a list item for each the following plants:  
1. Dogwood Tree  
2. Oak Tree  
3. Saguaro  
4. Kelp  
5. Venus Fly Trap  
6. Ent  

Give all ul's a border with a width of 3 pixels, a color of plum, and a style of dotted. Also, give them a border radius of 5px. Give all li's a top border of 3 pixels, a color of seagreen, and a style of solid.

```
<html>
<body>
<style>
ul {
  border: 3px plum solid;
  border-radius: 5px;
}
li {
  border-top: 5px seagreen solid;
}
li.mammal {
  background-color: lavenderBlush;
  font-weight: bold;
}

li.bird {
  background-color: lightGray;
  font-style: italic;
}

li.fish {
  background-color: lightYellow;
  text-decoration: underline;
}

li#mouse { color: gray }
li#canary { color: orangeRed  }
li#penguin { color: black }
li#salmon { color: salmon}
li#cat { color: sienna }
li#goldfish { color: gold }
li#dog { color: tan }
li#sheep { color: steelBlue }
li#parakeet { color: lime }
li#tuna { color: purple }
</style>

<ul>
<li class="mammal" id="mouse">mouse</li>
<li class="bird" id="canary">canary</li>
<li class="bird" id="penguin">penguin</li>
<li class="fish" id="salmon">salmon</li>
<li class="mammal" id="cat">cat</li>
<li class="fish" id="goldfish">goldfish</li>
<li class="mammal" id="dog">dog</li>
<li class="mammal" id="sheep">sheep</li>
<li class="bird" id="parakeet">parakeet</li>
<li class="fish" id="tuna">tuna</li>
</ul>
<ul>
<li>Dogwood Tree</li>
<li>Oak Tree</li>
<li>Saguaro</li>
<li>Kelp</li>
<li>Venus Fly Trap</li>
<li>Ent</li>
</ul>

</body>
</html>
```

####Exercise: Head to toe
Add a header to the top of the page with an h2 containing the text "Flora and Fauna".  
Next, add a div above the list of animals with an h3 containing the text "Central Nervous System".  
Similarly, add a div above the list of plants with an h3 containing the text "Photosynthesis".  
Put a footer at the bottom of the page with a paragraph containing the text "Copyright 2014" in the center of the footer.
Add a different background color and border to the header, footer, and each div.

```
<html>
<body>
<style>
ul {
  border: 3px plum solid;
  border-radius: 5px;
}
li {
  border-top: 5px seagreen solid;
}
li.mammal {
  background-color: lavenderBlush;
  font-weight: bold;
}

li.bird {
  background-color: lightGray;
  font-style: italic;
}

li.fish {
  background-color: lightYellow;
  text-decoration: underline;
}
header {
  border: 5px green groove;
  background-color: yellow;
}
footer {
  border: 8px purple inset;
  background-color: red;
}

#photo {
  border: 3px orange solid;
  background-color: blue;
}
#central{
  border: 11px blanchedalmond dashed;
  background-color: brown;
}
li#mouse { color: gray }
li#canary { color: orangeRed  }
li#penguin { color: black }
li#salmon { color: salmon}
li#cat { color: sienna }
li#goldfish { color: gold }
li#dog { color: tan }
li#sheep { color: steelBlue }
li#parakeet { color: lime }
li#tuna { color: purple }
</style>
<header>
  <h3>Flora and Fauna</h3>
</header>
<div id="central">
  <h4>Central Nervous System</h4>
</div>
<ul>
  <li class="mammal" id="mouse">mouse</li>
  <li class="bird" id="canary">canary</li>
  <li class="bird" id="penguin">penguin</li>
  <li class="fish" id="salmon">salmon</li>
  <li class="mammal" id="cat">cat</li>
  <li class="fish" id="goldfish">goldfish</li>
  <li class="mammal" id="dog">dog</li>
  <li class="mammal" id="sheep">sheep</li>
  <li class="bird" id="parakeet">parakeet</li>
  <li class="fish" id="tuna">tuna</li>
</ul>
<div id="photo">
  <h4>Photosynthesis</h4>
</div>
<ul>
  <li>Dogwood Tree</li>
  <li>Oak Tree</li>
  <li>Saguaro</li>
  <li>Kelp</li>
  <li>Venus Fly Trap</li>
  <li>Ent</li>
</ul>
<footer>
  <p>copyright 2014</p>
</footer>

</body>
</html>
```

####Exercise: Outsourcing
Move everything in the style tags to an external stylesheet and reference it in the head of your html page.
Replace "parakeet" in your list with a link to the wikipedia parakeet page.

```
<html>
<head>
  <title>Life</title>
  <link href="./styles.css" rel="stylesheet" type="text/css">
</head>
<body>
  <header>
    <h3>Flora and Fauna</h3>
    </header>
  <div id="central">
    <h4>Central Nervous System</h4>
  </div>
  <ul>
    <li class="mammal" id="mouse">mouse</li>
    <li class="bird" id="canary">canary</li>
    <li class="bird" id="penguin">penguin</li>
    <li class="fish" id="salmon">salmon</li>
    <li class="mammal" id="cat">cat</li>
    <li class="fish" id="goldfish">goldfish</li>
    <li class="mammal" id="dog">dog</li>
    <li class="mammal" id="sheep">sheep</li>
    <li class="bird" id="parakeet"><a href="http://en.wikipedia.org/wiki/Parakeet">parakeet</a></li>
    <li class="fish" id="tuna">tuna</li>
  </ul>
  <div id="photo">
    <h4>Photosynthesis</h4>
  </div>
  <ul>
    <li>Dogwood Tree</li>
    <li>Oak Tree</li>
    <li>Saguaro</li>
    <li>Kelp</li>
    <li>Venus Fly Trap</li>
    <li>Ent</li>
  </ul>
  <footer>
    <p>copyright 2014</p>
  </footer>

</body>
</html>
```

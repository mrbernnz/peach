##Exercise: Cookbook part 1

Create a new html file that has a head and an empty body.

**In Javascript** do the following:
  - Add a heading that says "Lasagna!"
  - Under the heading, create an unordered list that has a "Pasta" item and a "Sauce" item.
  - **Hint**: use```createElement``` and ```appendChild```

####Solution
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Cookbook</title>
  </head>
  <body>
  <script>
  //debugger;
  var h1 = document.createElement("h1");
  var ul = document.createElement("ul");
  var one = document.createElement("li");
  var two = document.createElement("li");
  var body = document.querySelector("body");
  h1.innerText = "Lasagna!";
  one.innerText = "Pasta";
  two.innerText = "Sauce";
  body.appendChild(h1);
  body.appendChild(ul);
  ul.appendChild(one);
  ul.appendChild(two);
  </script>
  </body>
</html>
```

##Exercise: Cookbook part 2

Using ```insertBefore```, put a paragraph tag with the text "Ingredients needed" between the heading and the unordered list.

####Solution
```html
<!-- Using insertBefore, put a paragraph tag with the text "Ingredients needed" between the heading and the unordered list. -->

<!DOCTYPE html>
<html>
  <head>
    <title>Cookbook</title>
  </head>
  <body>
  <script>
  debugger;
  var h1 = document.createElement("h1");
  var ul = document.createElement("ul");
  var one = document.createElement("li");
  var two = document.createElement("li");
  var par1 = document.createElement("p1");
  var body = document.querySelector("body");
  h1.innerText = "Lasagna!";
  one.innerText = "Pasta";
  two.innerText = "Sauce";
  par1.innerText = "Ingredients needed";
  body.appendChild(h1);
  body.appendChild(ul);
  ul.appendChild(one);
  ul.appendChild(two);
  body.appendChild(par1);
  body.insertBefore(par1,ul);
  </script>
  </body>
</html>
```

##Exercise: Cookbook part 3

Using ```removeChild``` and ```insertBefore```, take out the "pasta" list item and replace it with "Lasagna Noodles".

Also, add a "Cheese" item to the list.

####Solution
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Cookbook</title>
  </head>
  <body>
  <script>
  debugger;
  var h1 = document.createElement("h1");
  var ul = document.createElement("ul");
  var one = document.createElement("li");
  var two = document.createElement("li");
  var thr = document.createElement("li");
  var par1 = document.createElement("p1");
  var body = document.querySelector("body");
  h1.innerText = "Lasagna!";
  par1.innerText = "Ingredients needed";
  one.innerText = "Pasta";
  two.innerText = "Sauce";
  thr.innerText = "Lasagna Noodles";
  body.appendChild(h1);
  body.appendChild(par1);
  body.appendChild(ul);
  body.insertBefore(par1,ul);
  ul.appendChild(one);
  ul.appendChild(two);
  ul.removeChild(one); //taking  out pasta
  ul.insertBefore(thr,two);
  var four = document.createElement("li");
  ul.appendChild(four);
  four.innerText = "Cheese";
  //ul.appendChild(one);
  //ul.appendChild(thr);
  </script>
  </body>
</html>
```

##Exercise: The Siiiiimpsons (part 1: Make the family)
Create an HTML page with an unordered list.

In a script tag, use JavaScript to **loop** through the following array and add each item to that list:  

```
["Homer", "Marge", "Bart", "Lisa", "Maggie", "Abe"]
```

####Solution
```html
<!DOCTYPE html>
<html>
  <head>
    <title>The Simpsons</title>
  </head>
  <body>
  <script>
  debugger;
  var simp = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Abe"];
  var h1 = document.createElement("h1");
  var ul = document.createElement("ul");
  //var list = document.createElement("li");
  var body = document.querySelector("body");
  h1.innerText = "The Simpsons!";
  // list.innerHTML = simp;
  body.appendChild(h1);
  body.appendChild(ul);
  simp.forEach(function(name){
    var list = document.createElement("li");
    ul.appendChild(list);
    list.innerHTML = name;
  });
  //ul.appendChild(list);
    </script>
  </body>
</html>
```

##Exercise: The Siiiiimpsons (part 2: Add a Simpsons Character)
Add a button to your page (using HTML).
The rest of this exercise should be in a script tag.
When it is clicked, it will add a random Simpsons character from the following array:

```
["Apu", "Moe", "Barney", "Otto", "Nelson"]
```


####Solution
```html
<!DOCTYPE html>
<html>
<head>
  <title>The Simpsons</title>
</head>
<body>
  <button id="button">ADD</button>
  <script>

var simp = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Abe"];
var addsp = ["Apu", "Moe", "Barney", "Otto", "Nelson"];
var h1 = document.createElement("h1");
var ul = document.createElement("ul");
var body = document.querySelector("body");
h1.innerText = "The Simpsons!";
body.appendChild(h1);
body.appendChild(ul);
simp.forEach(function(name){
  var list = document.createElement("li");
  ul.appendChild(list);
  list.innerHTML = name;
});

//debugger;
var bttn = document.querySelector("#button");
bttn.addEventListener("click", function(){
  var list = document.createElement("li");
  var rand = Math.floor((addsp.length) * Math.random());
  list.innerHTML = addsp[rand];
  ul.appendChild(list);
  }
)
</script>
</body>
</html>
<!-- addsp[rand]
var rand = Math.floor((addsp.length-1) * Math.random()) + 1 -->
```

**The Booooonus:** Make a copy of this file.  In the copy, modify the button to prompt the user for the name of a character and then add the result to the page.  You will not need to use the random array for this. This, too, should be done in a script tag.

## Exercise: Leaving The Siiiiimpsons list (I guess this is part 3, isn't it?)
Make another button to remove a character. This can be written in HTML if you'd like.

Clicking on this button will remove the last element in the list. This should be written in a script tag.

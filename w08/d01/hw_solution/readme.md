## Movies Homework

### Step 1: Make a request to OMDB with one movie

[Full Solution](step1.html)

```js
var movie_name = "Top Gun";
var url_safe = encodeURI(movie_name);

var url = "http://omdbapi.com/?t=" + url_safe
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.addEventListener("load", function() {
  //parse the JSON response
  var data = JSON.parse(xhr.responseText)
  //data is now an object
  console.log(data);
});
xhr.send();
```

### Step 2: Fill in Screen elements with the data that comes back

[Full Solution](step2.html)

```js
//title
var h1 = document.querySelector('h1');
h1.innerHTML = data.Title;

//create list
var ul = document.querySelector('ul');
ul.innerHTML = "";

//add a poster
var img = document.createElement('img');
img.src = data["Poster"];
img.height = "200";
ul.appendChild(img);

//add list items
var addLi = function(property) {
  var li = document.createElement('li');
  li.innerHTML = data[property];
  ul.appendChild(li);
}
addLi("Year");
addLi("Rated");
addLi("Released");
addLi("Runtime");
addLi("imdbRating");
```

### Step 3: Create button to repeat 1-2 for another movie

[Full Solution](step3.html)

**Step 3a: Put 1-2 in a function**
```js
var showMovie = function(movie_name) {
  //everything from Step 1 and Step 2
}
showMovie("Jurassic Park");
```

**Step 3b: Hook up a button to call that function for the next movie in your list**
```js
var favs = ["The Truman Show", "Multiplicity", "Dazed and Confused" ];
var fav_index = 0;

var button = document.querySelector('button');
button.addEventListener('click', function() {
  //go to the next movie in the favs array
  fav_index+=1;
  //if we've done all the movies then cycle
  //back to the beginning
  if (fav_index >= favs.length)
    fav_index=0;

  //show the next movie
  var movie = favs[fav_index];
  showMovie(movie);
})
```

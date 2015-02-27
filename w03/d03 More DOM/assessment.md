####What would be the code to change the search button on yahoo to "you should use google"

```js
// var yhbttn = "#search-submit"
// var google = document.querySelector(search-submit);
// google.setAttribute(id, "You should use Google");

var button = document.querySelector(search-submit);
button.innerText="blah";
```

####Write js code to add an eventlistener to the click event on the button hat pops up an alert w/a message

```js
button.addEventListener("click", function(){

})

var element = document.querySelector(".button");
var eventname = "click";
var someFunc = function() {
  console.log(Thank You)
}
element.addEventListener(eventname, someFunc)
```

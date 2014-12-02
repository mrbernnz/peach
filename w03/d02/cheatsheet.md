## Cheatsheet

## Selecting and modifying DOM elements

#### selecting an element
```js
var css_selector = "li#mouse"
var element = document.querySelector(css_selector);
```

#### selecting multiple elements
```js
var css_selector = "li.mammal"
var elements = document.querySelectorAll(css_selector);
//elements can now be looped through using a for loop
```

#### grabbing the text of a textbox
```js
var textbox = document.querySelector("input#mytextbox");
var textbox.value
```

#### grabbing whether a checkbox is checked
```js
var checkbox = document.querySelector("input#mycheckbox");
var ischecked = checkbox.checked;
//ischecked is now either true or false
```

#### changing an attribute of an element
```js
var element = document.querySelector("#someid");
var attribute = "width";
var newvalue = "100";
element.setAttribute(attribute, newvalue);
```

## EventListeners
```js
//select an element, such as a button
var element = document.querySelector("#someid");
var eventname = "click";
var someFunc = function() {
  //do something
}
element.addEventListener(eventname, someFunc);
```

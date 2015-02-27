remove an element
```js
var ul = document.querySelector("ul");
var li = document.querySelector("li");

ul.removeChild(li);
```

or
```js
var parent = li.parentElement;
parent.removeChild(li);

li.addEventListener("dragstart", function(){
ul.removeChild(this);
}
)
```

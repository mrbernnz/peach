## Radio buttons and dragging

#### radio buttons
Make sure that they all have the same ```name```
```html
<input type="radio" name="hamster">First
<input type="radio" name="hamster">Second
<input type="radio" name="hamster">Third
```

#### dragging

In your html:
```html
<li draggable="true" id="justsomeid">
```




## DOM manipulation

#### createElement
```js
document.createElement("elementType")
```

#### insertBefore
```js
parentElement.insertBefore(newElement, referenceElement)
```

#### appendChild
```js
parentElement.appendChild(elementToAppend)
```

#### removeChild
```js
parentElement.removeChild(elementToRemove)
```

In your yavascript, listen for the `dragstart` event. Also, set the `draggable` attribute on your list item element to `"true"`

## forEach
```js
var array = [1,2,3];
array.forEach(function(elem) {
  // do something for each element
});
```

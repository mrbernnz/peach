## Keyup/Keydown
**Reference**
  - [Every keyboard keycode](ttp://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes)
  
The difference between `keyup` and `keydown` is when the
event is fired.
  - `keydown` will be fired the moment you press down
on a keyboard key.
  - `keyup` will be fired when you release the keyboard
key that you were pressing.

```js
var textInput = document.querySelector('#myinput');
//I am only adding this keylistener to a inputbox so that
//it only fires when a user presses a key AND the textbox
//is currently selected. This event will not fire if the
//textbox is not selected (i.e. they are not typing into it).
textInput.addEventListener("keyup", function(event) {
  //every letter and key on your keyboard has a keycode
  //associated with it. The enter key happens to have
  //the code 13.

  var keycode = event.keyCode;
  if (keycode === 13) {
    alert("you just pressed the enter key!");
  }
});
```


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

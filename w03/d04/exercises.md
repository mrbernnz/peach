####Exercise double print gum
Write a function called `doublePrint` that takes a number parameter and prints double the value of the number.

For example: `doublePrint(3)` would print 6.

####Exercise double print arrays
Write another function called `doublePrintArrays` that takes an array parameter and uses forEach to print double the value for each element in the array.

For example: `doublePrintArrays([1,2,3])` would print:  
2  
4  
6  

####Exercise: Doubleprint III: Return of Doubleprint

Write a function called doublePrintRet that takes an array parameter and uses forEach to add double each element to a new array.  Return that new array from the function.

For example: `doublePrintRet([1,2,3])` would return `[2,4,6]`.

**Hint**: this should not use the `doublePrint` function created previously.

####Exercise: Manipulation of the DOM kind
Create an HTML page with a `<p>` tag and a text input.  Add an event listener to the text input box that listens for the `keyup` event and updates the `<p>` to whatever is in the text input box.

In other words, while the user is typing into the textbox the **same** text shows up in the p tag.

####Todo: Make an exercise
Make a todo list in HTML.  It will contain one text input box, 1 button, and 1 unordered list.
Add an event handler for the button that will add whatever is in the text input box to the unordered list.

**Bonus:** Add another event handler for pressing enter in the text input box.  This will also add whatever is in the text input box to the unordered list.

####Exercise: Look at the size of that hamster!
#####Part I
1. Find 3 images of a hamster on the internet
1. Make an HTML page with an image tag.  
2. Add 3 radio buttons with the labels first, second, and third.
3. Make a function that will update the source of the hamster image to be the first, second, or third image, based on the value of the radio buttons.

#####Part II
Add a button that will call this function.

#####Part III
Have the radio buttons call the function on click.

####Exercise: Random Squares
1. Write a function that draws a square on a canvas in a new random place.
2. Write a function that will start an animation that will draw a new square every 10 seconds.
3. Make a button that will start this animation. (This button can be outside of the canvas.)

####Todo: Part II - Ain't it a drag?
On your todo list from earlier, add an event listener to each list item that will delete the item if it is dragged.

**Hint**: Listen for the `dragstart` event. Also, set the `draggable` attribute on your list item element to `"true"`

####Exercise: Don't take my word for it
[learnlayout.com](http://www.learnlayout.com/) is a great site that walks through how to position your DOM elements with CSS. Please read the entire site. There's a lot of information in there, but there's no need to have this stuff memorized; the internet isn't going anywhere (yet). The most important parts are probably the sections on display, margin, width, and positioning. 

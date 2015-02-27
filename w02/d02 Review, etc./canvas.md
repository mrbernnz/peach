## Canvas
*Implement one or more of the following functionalities in a canvas demo*

#### Using Objects in the Canvas

[Example of Squares as Objects](canvas_objects.html)

```javascript
var Square = function(x) {
  this.x = x;
  this.y = 100;
  this.squaresize = 100;

  this.draw = function() {
    //draw square in new position
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, 100,100)
  }
}

var square1 = new Square(100);
var square2 = new Square(300);
```

#### User Input
[Example using user input](animation.html)
```js
var handleKeyDown = function(evt) {
  if (evt.keyCode === 37) {
    console.log("left arrow pressed!");
  } else if (evt.keyCode === 39) {
    console.log("right arrow pressed!");
  }
}
//don't worry about the specifics of
//window.addEventListener, just realize that
//we are passing it our handleKeyDown function
window.addEventListener('keydown',handleKeyDown,true);
```

#### Drawing Images

**Reference**

[MDN Tutorial on drawing images](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images)


```javascript
var peachurl = "https://s3.amazonaws.com/uploads.hipchat.com/39979/1047137/rqHsCVp3fAgsTo2/peach.back.png"
var img = new Image();   // Create new img element
img.src = peachurl; // Set source path
ctx.drawImage(img,0,0);
```


#### Projectiles and Falling things

[Example of Square Bouncing](canvas_objects.html)

```javascript
var canvas = document.getElementById('the_canvas');
var ctx = canvas.getContext('2d');

var x = 100;
var y = 100;
var squaresize = 100;
var dropspeed = 0;

var draw = function() {
  //make square move to the right
  x++;

  //make square go up or down according
  //to dropspeed
  y += dropspeed;
  dropspeed += 1;

  //if we've reached the bottom
  if (y > canvas.width-squaresize) {
    //then make it go in the opposite direction
    dropspeed = -dropspeed;
  }

  //clear background
  ctx.fillStyle = "blue";
  ctx.fillRect(0,0, canvas.width, canvas.height);

  //draw square in new position
  ctx.fillStyle = "red";
  ctx.fillRect(x,y, 100,100)
}

setInterval(draw, 20);
```

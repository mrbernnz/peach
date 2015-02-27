## Review Solutions

1. function ```removeEvens```

  ```js
  var removeEvens = function(arr) {
    var odds = [];

    for(var i=0; i<arr.length; i++) {
      if (arr[i] % 2 === 1) {
        odds.push(arr[i])
      }
    }
    return odds;
  }
  ```

2. function ```mergeString```
  ```js
  var mergeString = function(arr) {
    var str = "";
    for(var i=0; i<arr.length; i++) {
      str += "Hey there, "+arr[i]+". "
    }
    return str;
  }
  ```

3. function ```mergeArray``` that combines two arrays
  ```js
  var mergeArrays = function(arr1, arr2) {
    var merged = [];

    //first merge in the first array
    for (var i=0; i<arr1.length; i++){
      merged.push(arr1[i]);
    }
    //now merge in the second
    for (var j=0; j<arr2.length; j++){
      merged.push(arr2[j]);
    }

    return merged;
  }
  ```

  **Bonus**: combine the arrays in alternating syntax
  ```js
  var mergeArrays = function(arr1, arr2) {
    var merged = [];
    var longer;
    var shorter;
    if (arr1.length > arr2.length) {
      longer = arr1;
      shorter = arr2;
    } else {
      longer = arr2;
      shorter = arr1;
    }
    //first merge both arrays alternating
    for (var i=0; i<shorter.length; i++){
      merged.push(shorter[i]);
      merged.push(longer[i]);
    }
    //if one array is longer, now merge
    //that one in
    for (var j=shorter.length; j<longer.length; j++){
      merged.push(longer[j]);
    }

    return merged;
  }
  ```

4. function ```mergeHashes```
  ```js
  var mergeHashes = function(hash1, hash2) {
    var merged = {}

    var hash1keys = Object.keys(hash1);
    var hash2keys = Object.keys(hash2);

    for(var i=0; i<hash1keys.length; i++) {
      var key1 = hash1keys[i];
      merged[key1] = hash1[key1];
    }

    for(var i=0; i<hash2keys.length; i++) {
      var key2 = hash2keys[i];
      merged[key2] = hash2[key2];
    }

    return merged;
  }
  ```

5. constructor ```Sheep```
  ```js
  var Sheep = function() {
    this.name = "sheep";
    this.species = "O. aries";
    this.genus = "Ovis";
    this.phylum = "Chordata";
    this.kingdom = "Animalia";
  }
  ```

6. constructor ```BaseballPlayer```
  ```js
  var BaseballPlayer = function(name, team) {
    this.name = name;
    this.team = team;
  }
  ```

7. constructor ```Car```
  ```js
  var Car = function(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.gear = "parked";
    this.stopped = true;

    this.drive = function() {
      this.gear = "drive";
      this.stopped = false;
      console.log(this.brand + " " + this.model + " is in drive.");
    }

    this.accelerate = function() {
      if(this.gear === "park") {
        console.log("The car has to be in drive in order to accelerate.");
      }
      else {
        console.log(this.brand + " " + this.model + " is accelerating.");
      }
    }

    this.stop = function() {
      console.log(this.brand + " " + this.model + " has stopped.");
      this.stopped = true;
    }

    this.park = function() {
      if(this.stopped === false) {
        console.log("Please stop the car before parking.");
      }
      else {
        console.log(this.brand + " " + this.model + " is parked.");
        this.gear = "park";
      }
    }
  }
  ```

8. constructor ```Square```
  ```js
  var Square = function(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    //assumes ctx is declared outside
    //of this function
    this.draw = function() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  ```

9. Drawing Squares

  ```html
  <html>
  <body>
  <canvas id = "myCanvas" width = "400" height = "400"></canvas>
  <script>

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var Square = function(width, height, color) {
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.width = width;
    this.height = height;
    this.color = color;

    this.draw = function() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  var createXSquares = function() {
    var allSquares = [];
    var numSquares = 10;
    for(var i=0; i<numSquares; i++) {
      var square = new Square(50, 50, "magenta");
      allSquares.push(square);
    }
    return allSquares;
  }

  var drawSquares = function() {
    //create just 10 squares
    var tenSquares = createXSquares();

    //draw the squares we created
    for(var i=0; i<tenSquares.length; i++) {
      var square = tenSquares[i];
      square.draw();
    }
  }

  var intervalID = setInterval(drawSquares, 100);

  </script>
  </body>
  </html>
  ```

10. Countdown to the new year

  ```js
  var counter = 10
  var countDown = function() {
    if (counter > 0) {
      console.log(counter);
      counter--;
    } else {
      console.log("HAPPY NEW YEAR")
      clearInterval(refreshIntervalId);
    }
  }

  var refreshIntervalId = setInterval(countDown, 1000);
  ```

11. Canvas New Years

  ```html
  <html>
  <body>
  <canvas id = "myCanvas" width = "400" height = "400"></canvas>
  <script>

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var clearBackground = function() {
    ctx.fillStyle = "blue";
    ctx.fillRect(0,0,canvas.width, canvas.height);
  }

  //not yet set
  var intervalID;
  var secondsCounted = 0;

  var draw = function() {
    clearBackground();

    var ballRadius = 50;
    var x = canvas.width/2 - ballRadius;
    var lastPosibleYPosition = canvas.width - ballRadius*2;
    var y = secondsCounted*lastPosibleYPosition/10;

    //the ctx.arc method needs the
    //x,y of the center of the circle
    var centerx = x + ballRadius;
    var centery = y + ballRadius;

    ctx.fillStyle = "magenta";
    ctx.beginPath();
    ctx.arc(centerx,centery,ballRadius,0,Math.PI*2,true);
    ctx.fill();

    secondsCounted++;
    if (secondsCounted > 10) {
      clearInterval(intervalID);
    }
  }

  draw();
  var intervalID = setInterval(draw, 1000);

  </script>
  </body>
  </html>
  ```

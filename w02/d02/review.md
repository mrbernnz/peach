## Review
  1. function ```removeEvens```
    - takes an array of numbers
    - returns a new array of numbers that has the even numbers removed

        ```javascript
        var a = [3,4,5,6,20,11];
        var b = removeEvens(a);
        // b now equals [3,5,11]
        ```
  2. function ```mergeString```
    - takes an array of names
    - returns a string that is some greeting message containing all the names

        ```javascript
        var stooges = ["Larry", "Curly", "Moe"];
        var stoogeString = mergeString(stooges);
        // stooge now equals "Hey there, Larry. Hey there, Curly. Hey there, Moe."
        ```

  3. function ```mergeArray``` that combine two arrays
    - takes two arrays
    - returns the combination of the two arrays
    - **Bonus** combine the arrays in alternating syntax, like so:

        ```javascript
        var fun = ["pretzels", "cheez-its", "m&ms"];
        var work = ["raisins", "dried apricots", "nuts"];
        var trailMix = mergeArray(fun, work);
        // trailMix now equals ["pretzels","raisins", "cheez-its", "dried apricots", "m&ms", "nuts"];
        ```

  4. function ```mergeHashes```
    - takes two hashes
    - returns the combination of the two hashes

    ```javascript
    var blue = {
      "Heisenberg": "Hello, anyone home?",
      "Cap'n Cook": "Science, friend!",
      "James McGill": "Ring, ring!"
    }
    var ciudad = {
      "Vuente": "Salud!",
      "Gus": "One taste and you'll know.",
      "Tio": "Family is all."
    }
    var happyFamily = mergeHashes(blue, ciudad);
    // happyFamily now equals { Heisenberg: 'Hello, anyone home?', Vuente: 'Salud!', 'Cap\'n Cook': 'Science, friend!', Gus: 'One taste and you\'ll know.', 'James McGill': 'Ring, ring!', Tio: 'Family is all.' }
    ```

  5. constructor ```Sheep```
    - takes no parameters
    - returns an object with the following properties:
      1. a ```name``` of "sheep"  
      2. a ```species``` of "O. aries"
      3. a ```genus``` of "Ovis"
      4. a ```phylum``` of "Chordata"
      5. a ```kingdom``` of "Animalia"

  2. constructor ```BaseballPlayer```
    - takes a baseball player name and team
    -returns an object with that name and team as properties.  
    - Use the internet (or a partner) to find some names.

  3. constructor ```Car```
    - takes a car brand, model, and color.
    - returns an object that has the following properties
      - brand
      - model
      - color
      - gear (initially ```"parked"```)
      - stopped (initially ```true```)
    - and has the following methods
      - `drive`
        - changes `gear` to "drive" and `stopped` to false.
        - prints out something like ```"Ford focus is in drive."```
      - `accelerate`
        - if `gear` is set to "park", print out a message telling the user to switch to "drive' first.
        - Otherwise, print something like "Ford focus is accelerating."
      - `stop`
        - print out someting like "Ford focus has stopped."
        - change `stopped` to true.
      - `park`
        - if `stopped` is set to false, print a message telling the user to stop the car first.
        - Otherwise, print something like "Ford focus is parked", and set the `gear` to "park".

  8. constructor ```Square```  
    - takes the following parameters:
      - x
      - y
      - width
      - height
      - color
    - and returns an object with those parameters
    - and the method ```draw``` which draws the square directly to the screen

  9. Drawing Squares
    - constructor ```RandomSquare```
      - modify the ```Square``` constructor to not take an x or y parameter and instead generate a random position.

    - function ```createXSquares```
      - take no parameters
      - create 10 squares using the ```RandomSquare``` constructor and return them in an array
    - function ```drawSquares``` that iterates over a previously created array of squares using ```createXSquares```
      - make sure to call this function with ```setInterval```

  10. Countdown to the new year
    - function ```countDown```
      - will print out to the terminal  10...9...8...7...2...1...HAPPY NEW YEAR
      - make sure that the countdown actually completes in 10 seconds

  11. Canvas New Years
    - create a canvas animation that displays a ball dropping from the top of the canvas to the bottom
    - **Bonus:** have the ball take exactly 10 seconds to drop

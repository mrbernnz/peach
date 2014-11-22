## Review Exercises

*These exercises are optional and do not need to be handed in. On monday we will add to the peach repository an answer key. Feel free to ask for our help to any of these after lessons in the afternoon.*

#### Cheatsheets
  - [Conditionals, Loops, Strings](https://github.com/ga-students/peach/blob/master/w01/d03/cheatsheet.md)
  - [For Loops, Arrays](https://github.com/ga-students/peach/blob/master/w01/d04/cheatsheet.md)
  - [Functions](https://github.com/ga-students/peach/blob/master/w01/d05/cheatsheet.md)

#### Short Answer Questions

1. What is the purpose of a loop?
2. Can a variable declared outside of a function be accessed within that function?
3. Can a variable declared within a function be accessed outside of that function?
4. What is the difference between javascript and node?
5. Why is ```setInterval``` useful for canvas animation?

#### Further Online Documentation

[JavaScript basics](http://autotelicum.github.io/Smooth-CoffeeScript/literate/js-intro.html)

*This link a lot of examples of basic Javascript syntax. Keep in mind that as with most documentation sources, there are things in here that you won't know yet.*

#### Exercises
*For each exercise, write a function that satisfies its requirements.*

1. Positive Negative

  - Given 2 integers, return true if one is negative and one is positive.

        ```javascript
        posNeg(1, -1)
        // true
        posNeg(-1, 1)
        // true
        posNeg(-4, -5)
        // false
        ```

 - Enhancement: Given 2 integers, return true if one is negative and one is positive **except** if the third argument is true, then return true only if both are negative.

        ```javascript
        posNeg(1, -1, false)
        // true
        posNeg(1, 1, false)
        // false
        posNeg(1, 1, true)
        // false
        posNeg(-3, -1, true)
        //true
        ```

2. Count xx
  - Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".

        ```javascript
          count_xx("abcxx")
          // 1
          count_xx("xxx")
          // 2
          count_xx("xxxx")
          // 3
        ```

3. Sum 10
  - Given 2 integers, return true if one if them is 10 or if their sum is 10.

        ```javascript
        makes10(9, 10)
        // true
        makes10(9, 9)
        // false
        makes10(1, 9)
        // true
        ```

4. String Without End
  - Given a string, return a version without the first and last char, so "Hello" yields "ell". The given string length should be at least 2 characters long.

        ```javascript
        withoutEnd('Hello')
        // 'ell'
        withoutEnd('java')
        // 'av'
        withoutEnd('coding')
        // 'odin'
        ```

5. Make Tags

  - The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes `<i>` and `</i>` which surround the word "Yay" -> `<i>Yay</i>`.
  - Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

        ```javascript
        makeTags('i', 'Yay')
        // '<i>Yay</i>'
        makeTags('i', 'Hello')
        // '<i>Hello</i>'
        makeTags('cite', 'Yay')
        // '<cite>Yay</cite>'
        ```

7. Inbetween
  - Write a command line program **not a function** that takes 2 numbers and prints every number in between

        ```bash
        $ inbetween 2 6
        # 3
        # 4
        # 5
        ```

8. Filtering Long Words
  - given an array of words and an integer i return the array of words that are longer than i.

        ```javascript
        filterLongWords(3, ["hello", "hi", "hey", "hola", "aloha"])
        // ["hello", "hola", "aloha"]
        ```

9. **Bonus** Initials
  - Given a person's name, return their initials.
  - It should work both with and without a middle name being provided.

        ```javascript
        initials('Neel Jayendra Patel');
        // NJP
        ```

10. Write a command line app **(not a function)** that returns a name randomly chosen from the cast of friends

  ```bash
  $ cast
  # Jennifer Anniston
  $ cast
  # Mathew Perry
  ```

11. Namester

*Write code that performs the following actions. Refer to the firstnamelist array given below.*

  - Retrieve "Bumblebee" from the firstname list
  - Add "Peter" to the firstnamelist
  - Remove "Muffinmitts" from the firstnamelist
  - Find out the index of "Scratchnsniff" in lastnamelist
  - Combine 1 randomly selected name from `firstnamelist` and 1 randomly selected name from `lastnamelist` to form a name.

```javascript
firstnamelist = ["Bumblebee", "Banderscoop", "Broccoli", "Rinkydink", "Bombadil", "Boilerduck", "Bandicoot", "Fragglerock", "Muffinmitts", "Crumplesack", "Congleton", "Blubberbrains", "Buffalo", "Benadryl", "Butterfree", "Burberry", "Whippersnatch", "Buttermilk", "Beezlebub", "Budapest", "Boilerdang", "Blubberwhale", "Bumberstump", "Bulbasaur", "Cogglesnatch", "Liverswort", "Bodybuild", "Johnnycash", "Burgerking", "Bonaparte", "Bunsenburner", "Billiardball", "Baseballmitt", "Blubberbett", "Baseballbat", "Rumblesack", "Barister", "Danglerack", "Rinkydink", "Bombadil", "Honkytonk", "Billyray", "Bumbleshack", "Snorkeldink", "Anglerfish", "Beetlejuice", "Bedlington", "Bandicoot", "Boobytrap", "Bentobox", "Pallettown", "Wimbledon", "Hairyhog", "Buttercup", "Blasphemy", "Syphilis", "Snorkeldink", "Brandenburg", "Barbituate", "Snozzlebert", "Tiddleywomp", "Bouillabaisse", "Wellington", "Benetton", "Bendandsnap", "Timothy", "Brewery", "Bentobox", "Brandybuck"];

lastnamelist = ["Coddleswort", "Curdlesnoot", "Calldispatch", "Humperdinck", "Rivendell", "Cuttlefish", "Lingerie", "Vegemite", "Ampersand", "Cumberbund", "Candycrush", "Clombyclomp", "Cragglethatch", "Nottinghill", "Cabbagepatch", "Camouflage","Creamsicle", "Curdlemilk", "Upperclass", "Frumblesnatch", "Crumplehorn", "Talisman", "Candlestick", "Chesterfield", "Bumbersplat", "Scratchnsniff", "Snugglesnatch", "Charizard", "Carrotstick", "Cumbertoot", "Crackerknack", "Crucifix", "Cuckatoo", "Crackletot", "Collywog", "Gigglesnort", "Capncrunch", "Covergirl", "Cumbersnatch", "Countryside","Coggleswort", "Splishnsplash", "Copperwire", "Animorph", "Curdledmilk", "Cheddarcheese", "Cottagecheese", "Crumplehorn", "Snickersbar", "Banglesnatch", "Stinkyrash", "Camelhump", "Chickenbroth", "Concubine", "Candygram", "Moldyspore", "Chuckecheese", "Cankersore", "Crimpysnitch", "Wafflesmack", "Chowderpants", "Toodlesnoot", "Clavichord", "Cuckooclock", "Oxfordshire", "Cumbersome", "Chickenstrips", "Battleship", "Commonwealth", "Cunningsnatch", "Custardbath", "Kryptonite"];
```

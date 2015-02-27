#### Arithmetic

##### Part 1: Addition
Create the route `/add/[num1]/[num2]` that will respond with the sum of `num1` and `num2`

##### Part 2: Addition and Substraction
Have your server handle the route from part 1 and in addition the route `/sub/[num1]/[num2]` that will respond with the result of `num1` minus `num2`

#### Counting is fun

Create an http server that counts the number of times the letter 's' is used in the url. For instance when going to `/sandy/is/so/cool` it should respond with 3.

#### Bonus: How many times?

Create an http server that counts the number of times a specific url was hit, no matter what url the user typed in.

So for instance if the user visits `/hello` it should respond with '0'. If they visit `/hello` again it should respond with '1'. If they then visit `/cool` it should respond with '0'.

#### Bonus: Favorite Colors

Use the following object of keys and values:
```js
var favcolors = {sean: "purple", sarah: "white", lisa: "black", john: "green", david: "turquoise"}
```

Create a route for each one of the names in this list and have your server respond with that person's favorite color. In other words, you should be able to go to the urls `http://localhost:2000/sean` and the server should respond with the html (or just text) that says "purple".

You should not just have 5 if statements checking to see if the path is one of the names. Imagine if the object had 1000 keys. You need to figure out a more robust solution.

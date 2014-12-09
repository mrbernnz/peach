## Review

#### Exercise: Double the input
- function double
  - takes one number as parameter
  - returns the double of the result

- use this function to process standard input
  - if the user enters `3`, print `6`. if they enter `8`, print `16`.

Websocket version:
  - write a websocket server that processes a client's input in the same way.
  - when the client enters `3`, we should send back to the client `6`.


#### Exercise: Add the input
**Reference**
```js
var str = "jack,jill";
var arr = str.split(",");
//arr is now ["jack", "jill"]
```

- function `add`
  - takes two numbers as parameters
  - returns the sum of the parameters

- use this function to process standard input
  - prompt the user for two numbers: "Please enter in two numbers with a space inbetween"
  - use `split` to break the input into 2 numbers
  - print back to the user the sum of the two numbers
  - if the user enters `2 3` you should print out `5`

Websocket version
  - write a websocket server that processes a client's input in the same way

Node-notifier version
  - output the answer as a notification whenever input is received

#### Exercise: Adding special commands

- function `sub`
  - takes two numbers as parameters
  - returns the first minus the second

- use this function and the `add` function to process standard input
  - if the user enters in `sub 10 2` then print back 10 minus 2 which is `8`
  - if the user enters in `add 4 8` then print back 4 plus 8 which is 12

- create a websocket version as well

#### Bonus: Add and Subtract all the numbers

- complete the same exercise as before ("Adding special commands") but support any number of arguments to the `add` and sub` commands
- `sub 20 5 4 2 1` would be 20 - 5 - 4 - 2 - 1 = 8
- `add 5 2 9 11 13` would be 5 + 2 + 9 + 11 + 13 = 40



## Websocket clients

#### Exercise: Any port
- have your websocket code take one argument specifying the port to connect to the server on
- so `node main.js 2000` will connect on port 2000

## Sending Messages to the server

#### Exercise: Howdy every second
- have your client side code send the message `Howdy!` to your server every second
- **HINT** think about where to put this code. Make sure that you don't try to send a message if your client isn't connected yet

#### Further Exercise: Input to server
- write a client that takes input from the terminal and sends it to the server
- in other words, whatever you type will be sent up to the server (when you press enter)


## Receiving data from the server

#### Exercise: Echo client
- write a client that sends back to the server any message it receives

#### Further Exercise: Picky client
- write a client that sends back to the server `hey server` when (and only when) it receives the message `hey client`

#### Further Exercise: only accept one
**Reference**
- close a client connection
  - ```ws.close()```

- write a server that will accept a connection from the first client but will refuse every subsequent client with a response "No can do sorry"

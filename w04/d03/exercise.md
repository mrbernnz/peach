## Review
**Reference**

Don't forget to do this in a new folder
```js
npm init
npm install cowsay --save
```


#### Exercise: cowsay

**part 1**:
- write a client that upon receiving user input sends a cowsay'd version of the messsage to the server

**part 2**:
- write a server that upon receiving input from the client sends a cowsay'd version back to the client

## Websockets in the browser

An example of the difference between [client_node.js](client_node.js) and [client_browser.js](client_browser.js)

Note:
We don't yet know how to use npm libraries in browser-side javascript, but we will learn it later. You have to use a special tool called browserify to pull it off.

#### First Client in the browser
- Part 1:
- `console.log` incoming messages
- also `document.write` the messages
- Part 2:
- create an `ul` element
- add an `li` to this `ul` with the `innerHtml` set to the message
- Part 3: **Bonus**
- change your solution to part 2 so that you add the li to the **top** of the list
- **Hints**:
- `element.firstChild`
  - called like `ul.firstChild()`
  - [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Node.firstChild)
  - will return the first child of the ul element
- `element.insertBefore`
  - called like `ul.insertBefore(newElement, elementToInsertBefore)`
  - [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Node.insertBefore)



#### Exercise: Let the user chat!
*we need to add a way for the user of the browser chat to enter in text and send messages to the server*

- Add an input box on your page to capture input. Just put this in the html code, this does not need to be dynamically generated in javascript
- Add a button with an event listener that sends the text in the input box to the server
- Be sure to test this out using `wscat -l 3000` to act as a server

#### Further exercise: Styling
- add css to your `ul` element to have a styling property `list-style` of `none`
- while you're at it, add any other stylings and personality to your page.

#### Bonus: keydown on user input
- Ditch the button and instead allow the user to press the enter key while in the input box to send text to the server


## Keeping track of the clients connected to a server

#### Exercise : Put each `ws` in an array
- Hint: use ```.push()```

#### Exercise : Broadcasting messages
- everytime a client connects, broadcast  the message `client connected` to every already connected client

#### Exercise : handle the case when a client disconnects

Keeping track of client connections can be tricky because a client can disconnect while other clients are still connected.

Luckily, there the event `close` is called on a websocket object when it is disconnected.

```js
ws.on("close", function() {
  //do something
})
```

Use this event to handle the case when a client disconnects by removing that client's `ws` object from the array of clients.

#### Further Exercise : every second send all clients a "hello" message

#### Exercise : WebSocket Chatroom
There are only 3 requirements for a websocket server to be able to host a chatroom

1. Allow multiple clients to connect and keep track of them in an array
2. Be sure to handle the case where a client disconnects from the server
3. Here's the new part: When a user sends a message to the server have the server broadcast the message back to all the clients **except** the client that sent the message

That's it! Test it out by connecting to the server with multiple `wscat`'s (each in it's own terminal)

## Chatroom Enhancement ideas:

#### Replace :) with smiley face emoticons automatically
#### Bonus: render img links in the browser chat client
#### Bonus: render gifs in the browser chat client

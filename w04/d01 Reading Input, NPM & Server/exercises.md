## Learning Objectives
  - Reading Input from the user
  - Use Npm packages
  - Write our first server!

## Reading input

#### Exercise: if they say "hello" you say "hi how are you"
Write a command line app
- That prints out `Type in your input` and waits for input
- If the user types in `hello` (and then hits enter)
  - then print out `hi!`
- Otherwise print out `right right`
- **Bonus:** handle the case where the user enter's `Hello` or `HELLO` similarly.

#### Further Exercise: Anything or exit
**Reference**
- To exit your program:
  - `process.exit()`

Write a command line app
- That prints out `Press Enter to continue`
- If they type in `exit` (and then press Enter) then exit your application
- Otherwise print out the message again.

#### Bonus: JokeBox

Write a command line app
- That prints out a random joke (chosen from 3 or more jokes)
- Prompts the user `Would you like to hear another one?`
- Repeats a joke on input `y` and exits on input `n`

## npm: global installation

#### Exercise: Globally installing a package with npm
**Reference**
- [cowsay](https://www.npmjs.org/package/cowsay)
- `CMD-shift-4` to take a screenshot

**Steps**
- use npm to globally install the  [cowsay](https://www.npmjs.org/package/cowsay) package.
- give the cow a unique message and then hipchat to your group room a screenshot of your terminal output

## npm: local installation

#### Exercise: make a hello command line app in node
- create a folder `hello` to put your program's files in
- `cd` into that folder
- create a file `index.js` and in it put javascript code to output `Hello`
- run `npm init`
  - follow the prompts

## require'ing node modules
*First install the `node-notifier` package to your node app*

**Main.js** (from the npm/github readme!)
```js
var notifier = require('node-notifier');
notifier.notify({
  'title': 'My notification',
  'message': 'Hello, there!'
});
```

## .gitignore

#### Exercise: push your hello (notification) app to github
*.gitignore*
```
node_modules
.DS_Store
```
*now in the terminal*
```
git init
git add .
git commit -m "made something cool!"
git remote add origin [github link]
git push origin master
```


#### Exercise: Explore NPM
**Npm links**
- [Npm](https://www.npmjs.org/)
- [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs)
- [cool-ascii-faces](https://www.npmjs.org/package/cool-ascii-faces)
- [ipify](https://github.com/sindresorhus/ipify)

**Steps**:
- pair up with a partner and search npm for an interesting library.
- Try to run demo code on your local computer that uses the library. The readmes often include sample code that you can completely copy and paste.
- **Bonus**: push up a repo containing your demo with a package.json


## Websockets: Writing your first server!!

#### Make a server using websockets
We want to:
  - Make a server using the ```ws``` package.  
  - When a client connects, have it log a message using `console.log`.
  - Use `wscat` to connect to it and verify that it worked.

**server.js**
```js
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  console.log("Client connected!");
});
```
**In a terminal**
```
node server.js
```
**In another terminal**
```
wscat -c ws://localhost:3000
```

#### Exercise: Print out how many clients are connected
Write a websocket server that prints out the number of clients connected everytime a new client connects

## Messaging the client
We want:
  - the server to send a message to the client when the client has connected to the server.
  - Use `wscat` to verify that it works.

**main.js**
```js
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function (ws) {
  console.log("Client connected!");
  ws.send("You have connected to the server!");
});
```

#### Exercise: Hello Hello Hello
- Have the server message to the client "Hello" every second.
- **Hint** instead of doing ```ws.send``` right away, use ```setInterval``` to do the same every second.

## Responding to data from the client
We want:
  - to perform some action when the client sends us data
  - send data to our server using ```wcat```

Reference:
```js
  ws.on("message", function (message) {
    //do something with message
  });
```

#### Exercise: Picky logging
- Only log the message that was received on the server side if the message is exactly ```Howdy!```

#### Bonus: Echo server
- Send back to the client every message that they send to you

#### Bonus: Jokebox
- Print to the client a random joke every time that you receive a new message from them
- This will allow the client to just press enter when connected to hear a new joke

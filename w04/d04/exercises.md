## Review

#### Exercise: wscat server
- write a server that listen's for only one client. If a second client tries to connect, simply close their connection right away
- make sure that any input that the user types is captured and sent to your one client
- **Bonus** try to recreate the command line interface of `wscat` where you type `wscat -l 3000` to create a server on port 3000
  - this means that your server would take two parameters, the first you should confirm is `-l`, anything else should cause your program to exit
  - the second argument is the port. We've been using port `3000` but it could be anything
  - note that `wscat` also has the following properties
    - `wscat -l 3000` right away prints out the message `listening on port 3000 (press CTRL+C to quit)`
    - when a client connects `wscat` prints `client connected`
    - when the client disconnects it prints `disconnected`

```
var WSS = require('ws').Server;

var flag = process.argv[2];
var portArg = process.argv[3];

if (flag !== "-l" || !portArg) {
  console.log('bad args!')
  process.exit(1);
}

var server = new WSS({port: portArg});
var client;
var connected = false;

console.log("listening on port " + portArg + " (press CTRL+C to quit)");

server.on("connection", function(ws) {
  if (connected === false) {
    client = ws;
    connected = true;
    ws.on("message", function(msg) {
      console.log(msg);
    })
    ws.on("close", function() {
      connected = false;
      console.log("disconnected");
    })
    console.log("client connected")
  } else {
    ws.close();
  }
})

process.stdin.on('data', function(input) {
  if (connected === true) {
    var processedInput = input.toString().trim();
    client.send(processedInput);
  }
})
```


#### Exercise: wscat client
- write a client that connects to one server.
- make sure that any input that the user types is captured and sent to the server
- **Bonus** try to recreate the command line interface of `wscat` where you type `wscat -c ws://localhost:3000`.
  - this means your client takes two parameters, the first you should confirm is `-c`, anything else should cause your program to exit ... unless you are supporting the `-l` option as well (from the previous Bonus exercise)
  - the second argument is the websocket address
  - note that `wscat` also has the following properties
    - `wscat -c ws://localhost:3000` prints out right away `connected (press CTRL+C to quit)`.
    - when the server closes the connection (e.g. if you type `CTRL+C` in the terminal on the **server** side) it prints out `disconnected`. Also exit the program.

```
var Client = require('ws');

var address = process.argv[2];
if (!address) {
  console.log("bad args!");
  process.exit(1);
}

var ws = new Client(address);

ws.on("open", function() {
  console.log("connected (press CTRL+C to quit)");
})

ws.on("message", function(msg) {
  console.log(msg);
})

ws.on("close", function() {
  console.log("disconnected");
  process.exit();
})

process.stdin.on("data", function(input) {
  var processedInput = input.toString().trim();
  ws.send(processedInput);
})
```

## Persistence

#### Exercise: Chat history
- have a server store all messages it receives from any client in an array
- whenever a client connects, send to them all past messages
- this is like in hipchat when you join a room and you get to see all the chat history that you missed
- **Hint:** Here's how you can convert an array of strings to a long message with each element of the array seperated by newlines: `arr.join('\n')`

```
var WSS = require('ws').Server;
var server = new WSS({port: 3000});

var history = [];

server.on("connection", function(ws) {
  ws.on("message", function(msg) {
    history.push(msg);
  });
  var historyMsg = history.join("\n");
  ws.send(historyMsg);
})
```

## Serialization

#### Exercise: User names
*For this exercise use a pre-existing chat server that you or another student. If you do not have one already made your instructor can hipchat you one.*


**part 1:**

- Write a chat client for the browser where instead of sending up to the server exactly what the user types, create the following object: `{name : "their-name", msg : "the message they typed in"}`.
- For now, the name key on the object can be hardcoded to whatever you want
- Serialize this object in JSON and send it up to the server
- Whenever a client receives a message from the server, assume that the message is in JSON
- Deserialize the JSON message and render it into the chat area of the client as `name: msg`.
  - So if `john` says `hello everybody!` the chat msg that every client renders in the browser would be `john: hello everybody!`

**part 2:**
- Instead of hardcoding the name of a chat user, let's allow them to change it
- When your chat client starts have their name be "anonymous"
- Create an input box somewhere on the page where the user simply enters in their name. You don't even need a button to submit it if you don't want.
- Whenever a message is inputed by the user, construct your message object (the object that you serialize with JSON) setting the name value to what is in that input box
- So if the input box is currently filled with the text `Jack` and the user types in the message `Hello Everybody` then the object that is serialized and sent to the server would be `{name: "Jack", msg: "Hello Everybody"}`


html:
```
<html>
<body>
<input type="text" id="name" placeholder="Name">
<input type="text" id="msg">
<button>Send message</button>
<ul></ul>
<script src="user_names.js"></script>
</body>
</html>
```
js:
```
var ws = new WebSocket("ws://localhost:3000");

var addText = function(msg) {
  var newli = document.createElement("li");
  newli.innerHTML = msg;

  var ul = document.querySelector("ul");
  var firstli = ul.firstChild;
  ul.insertBefore(newli, firstli);
}

ws.addEventListener("message", function(evt) {
  var obj = JSON.parse(evt.data);
  var newmsg = obj.name + ": " + obj.msg;
  addText(newmsg);
})

var button = document.querySelector("button");
button.addEventListener("click", function() {
  var text = document.querySelector('#msg').value;
  var name = document.querySelector('#name').value;
  addText(text);
  var obj = {}
  obj.name = name;
  obj.msg = text;
  var json = JSON.stringify(obj);
  ws.send(json);
})
```


## Further Exercises

#### Change the message

**part 1:**
- Create an html page with an `h1` tag, an input box, and a button
- Whenever the button is pushed change the text of the `h1`

**part 2:**
- Also when the button is pushed, send to a connected server the message
- Whenever the client receives a message from the server, change the `h1` to the message received
- In other words, this is like a chatroom but instead of accumulating messages, people are collaboratively changing just one message

html:
```
<html>
<body>
<h1></h1>
<input type="text"></input>
<button>Change Message</button>
<script src="change_message.js"></script>
</body>
</html>
```
js:
```
var ws = new WebSocket("ws://localhost:3000");

var changeText = function(msg) {
  document.querySelector("h1").innerHTML = msg;
}

ws.addEventListener("message", function(evt) {
  changeText(evt.data);
})

var button = document.querySelector("button");
button.addEventListener("click", function() {
  var text = document.querySelector('input').value;
  changeText(text);
  ws.send(text);
})
```

#### Bonus: Serialization and Persistence

- Take the exercise from Serialization, where user names are supported in your chat app, and add to it the capability from the Persistence exercise, whereby all of the chat history persists on the server and is sent down to the client immediately upon connecting.

## Learning Objectives

1. Read/Write from Files
2. Serve files through HTTP
3. Work with each other


## Reading from a file

#### Exercise: Count the number of lines

  Count the number of lines in a file. Open up your own code file as a sample file (as in `fs.readFile("index.js, ...`)

**Bonus**

Print out the contents of the file with lines in reverse order.


## Writing to a file

#### Exercise: Command Line Message

Write a command line app that takes two arguments. The first argument is the name of a file and the second argument is the text to write into that file.

#### Further Exercise: Read then Write

Write a command line app that takes two arguments. The first is an existing filename, and the second is a new filename. Read the contents of the first file and write them to the second file.

#### Challenge

Write a command line app that takes two files as arguments and forms a new file with the lines of the files interspersed. So if the first file is

```
Hello
Yo
```

And the second was

```
Totally
Cool
Dude
```

Then the new file would be

```
Hello
Totally
Yo
Cool
Dude
```


## Bonus: Serialization


#### Exercise, serialize the chat history

**History server sample code**:
```js
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

Take this code and modify it to persist its history to a file.

You have to:

1. Read in the history array from a file. Assume that the contents of the file are in JSON.
2. Write the history array to a file after every message comes in (because that is when the history array changes).

A good way to test out whether your program is working is by connecting to the server through `wscat`

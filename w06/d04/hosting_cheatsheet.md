#### Ecstatic

```js
var http = require('http');
var ecstatic = require('ecstatic');

http.createServer(
  ecstatic({ root: __dirname + '/public' })
).listen(8080);

console.log('Listening on :8080');
```

#### Running a program in the background
```
node server.js &
```

#### Killing this program

First run this:
```
ps | grep node
```

You will see somethign like this:
```
3952 ttys001    0:00.07 node server_one_to_many.js
```

The pid of your program is the first number, copy this number. Then do:
```
kill -9 [number-goes-here]
```

#### Running your server, in the background, through SSH
```
nohup node server.js &
```

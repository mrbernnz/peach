## Reading in Input
```js
var cb = function(data) {
  var strData = data.toString().trim();
  console.log("you typed " + strData);
}
process.stdin.on("data", cb);
```

## Exiting your node program
```js
process.exit();
```

## npm

#### global install


*you can run it no matter what directory you're in*
```
npm install -g [package-name]
```

#### local install

*this is for node/javascript code and not executables*
```
npm install [package-name]
```
#### package.json

*this will create a bare bones package.json for your node "app" or package*
```
npm init
```

#### installing dependencies to your package.json
*do this to install any third-party package that your code depends on*
```
npm install --save [package-name]
```

#### gitignore

just add this to a .gitignore file in the directory of any node app
```
node_modules
.DS_Store
```

## wscat

listening on port 3000:
```
wscat -l 3000
```

connecting to a remote server at port 3000
```
wscat -c ws://seanwest.princesspeach.nyc:3000
```

## Websockets server
```js
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  console.log("Client connected!");
});
```

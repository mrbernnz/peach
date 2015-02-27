##Objectives:
1. You will be able to read and write to files in Node.
2. You will be able to serve files through http.

```js
var fs = require("fs");
fs.readFile("someFile.txt",function(err,data)
{
var text = data.toString();
console.log(text);
})
//alternative to readwrite.js code when you want to avoid nesting and indentation.
var doneReading = function(e,data)
{
  fs.writeFile('filename',data,doneWriting);
};
var doneWriting = function(e)
{
  console.log("done");
};
fs.readFile('filename',doneReading);
```

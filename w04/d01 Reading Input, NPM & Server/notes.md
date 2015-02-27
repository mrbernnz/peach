```js
var a = [1,2,3];
function cb(num)
{
console.log(num);
}
a.forEach(cb);

//event listener
object.addEvent(eventname,function()
{
//do something
//do not return
//pass on
});

button.addEventListener("click",function()
{
//do something
});

//
process.argv
when a object is attached to another object(not a function) it becomes a property.

process.stdin.on("data",function(data)
{
console.log(data);
});

process.stdin.on("data",function(data)
{
var newdata = data.toString().trim();
console.log(newdata);
});

//notifier
var notifier = require("node-notifier");
var opts ={};
opts["title"]="hello";
opts["message"]="you're cool";
notifier.notify(opts);

var notifier = require('node-notifier');
var opts = {title:"hello"};
notifier.notify(opts);
```

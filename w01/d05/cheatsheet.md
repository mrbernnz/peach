#### Functions

**Creating a function**

```
var myfunc = function(param1, param2) {
  //do something with param1 and param2
  return something; //optional
}
```

**Calling a function**

```
var a = //something;
var b = //something;
var return_value = myfunc(a, b);
```

#### Timers

**Call a function 2 seconds from now**
```
var handle = setTimeout(myfunc, 2000);
//we can also remove that Timeout
clearTimeout(handle);
```

**Call a function every 2 seconds**
```
var handle = setInterval(myfunc, 2000);
//we can remove that Interval
clearInterval(handle);
```

```js
//createElement useful for project. Form as well

var ol = document.querySelector("#myol");
ol.oppendChild(myli);

var body = document.querySelector("body");
var ul = document.createElement("ol");
body.oppendChild(ul);
var li = document.createElement("li");
ul.oppendChild(li);

//callbacks
var button = document.querySelector("button_id");

//variation one. the function is anonymous.
var x = 0;
button.addEventListener("click", function(){
    alert(x);
    x++;
});

//variation two
var x = 0;
var f = function(){
    alert(x);
    x++;
}

button.addEventListener("click",f);

//I think calculator HW
var add = function(x,y){
    return x + y;
}

var cal = function(func,x,y){
    func(x,y);
}

var ans = cal(add,2,3);
console.log(ans);

//adding a function into a addEventListener
//button.addEventListener("click",addfunc);
//addfunc is a function

//for each
var arr = [1,5,10,15]
for(var i=0; i<arr.length; i++){
    var elem = arr[0];
    console.log(elem);
}

//variation one
var arr = [1,5,10,15]
var func = function(elem){
    console.log(elem);
}
arr.forEach(func);

//variation two
var arr = [1,5,10,15];
arr.forEach(function(elem){console.log(elem)});
//forEach is expected to take a parameter.


//using debugger in a browser

debugger;
var everything = function (){
    var f = function(){
        something
    }
}
```

## Assessment

**Directions**
- Try to complete these two exercises in 20 minutes. It is ok if you don't finish in time
- Hipchat the answer to your instructor personally (just copy and paste in your code)

####Exercises 1: The Weekend

Write a command line program that:
  - takes a day of the week as an argument (lowercase)
  - prints to the terminal ```weekend``` or ```weekday``` depending on whether that day lies on the weekend

####Solution
```js
var pnum = process.argv[2]

if (pnum.length === 10) {
  console.log("valid");
}
else {
  console.log("invalid");
}
```
####Sean's
```js
var num = process.argv[2];

if (num.length === 10) {
  console.log("valid");
} else {
  console.log("invalid");
}
```

#### Exercise 2: The Telephone

Write a command line program that:
  - takes a phone number as an argument
  - prints ```valid``` or ```invalid``` depending on whether it is the right amount of digits
  - *Assume no dashes, paranthesis, or initial ```1``` for out-of-area calls e.g. ```8004441111```*

####Solution
```js
var x = process.argv[2]

var a = "monday";
var b = "tuesday";
var c = "wednesday";
var d = "thursday";
var e = "friday";
var f = "saturday";
var g = "sunday";

if (x === (a || b || c || d || e)) {
console.log("weekday");
}
else {
  console.log("weekend");
}
```
####Sean's
```js
var day = process.argv[2];

if (day === "saturday" || day === "sunday") {
  console.log("weekend");
} else {
  console.log("weekday");
}
```
